import React, { useEffect, useState } from "react";

declare const katex: any;

export default function Math({
  children,
  m,
}: React.PropsWithChildren<{ m: string }>) {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(katex.renderToString(m));
  }, [m, children]);
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
