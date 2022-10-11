import sharp from "sharp";
import glob from "glob";
import fs from "node:fs";
import prettier from "prettier";

glob("src/**/*/{*.png,*jpg}", {}, async function (er, files) {
  const images = {};
  for (const file of files) {
    const input = await sharp(file);
    let primaryColor = [];
    const metadata = await input.clone().metadata();

    await input
      .clone()
      .stats()
      .then(({ channels: [rc, gc, bc] }) => {
        const r = Math.round(rc.mean),
          g = Math.round(gc.mean),
          b = Math.round(bc.mean);

        primaryColor = [r, g, b];
      });

    const fileBasePath = file.split(".");
    const outputFileName = fileBasePath.join(".");

    await input.clone().toFile(`${outputFileName}.minimized.${metadata.format}`);

    await input
      .clone()
      .resize(metadata.width > metadata.height ? { width: 16 } : { height: 16 })
      .toFile(`${outputFileName}.thumb.${metadata.format}`);

    images[file] = {
      main: `rgba(${primaryColor[0]},${primaryColor[0]},${primaryColor[0]},0)`,
      width: metadata.width,
      height: metadata.height,
    };
  }

  fs.writeFileSync(
    "src/AssetsMeta.ts",
    prettier.format(`export default ${JSON.stringify(images)}`, { parser: "typescript" })
  );
});
