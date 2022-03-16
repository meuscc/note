import md from "./RustCheat.md";

console.log(md);

export default function RustCheat() {
  return (
    <div class="page">
      <div class={"article heti"}>
        <h1>Rust概览</h1>
        <div innerHTML={md}></div>
      </div>
    </div>
  );
}
