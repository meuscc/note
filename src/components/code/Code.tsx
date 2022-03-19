import React, { useEffect, useState } from "react";

declare const Prism: any;

export default function Code({
  children,
  c,
  l = "javascript",
}: React.PropsWithChildren<{ c?: string; l?: string }>) {
  const [content, setContent] = useState("");

  useEffect(() => {
    let trimmed = c ?? children?.toString() ?? "";

    if (trimmed.indexOf("\n") === 0) {
      trimmed = trimmed.replace("\n", "");
      const match = trimmed.match(/\s+/);
      trimmed = trimmed.replaceAll(match?.[0] ?? "", "").trim();
    }

    console.log(trimmed);

    const html = `<pre class="language-${l}"><code class="language-${l}">${Prism.highlight(
      trimmed,
      Prism.languages[l],
      l
    )}</code></pre>`;

    setContent(html);
  }, [c, children]);
  return <span dangerouslySetInnerHTML={{ __html: content }} />;
}
