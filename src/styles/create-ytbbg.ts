function createYtbBg() {
  const ctn = document.createElement("div");
  const iframe = document.createElement("iframe");
  const opEl = document.createElement("div");

  opEl.style.position = "absolute";
  opEl.style.zIndex = "9999";
  opEl.style.right = "24px";
  opEl.style.top = "100px";

  ctn.style.pointerEvents = "none";
  ctn.style.position = "absolute";
  ctn.style.left = "0";
  ctn.style.top = "0";
  ctn.style.overflow = "hidden";
  ctn.style.zIndex = "-1";
  ctn.style.width = "100vw";
  ctn.style.height = "100vh";

  // iframe.style.pointerEvents = "none";
  iframe.style.position = "absolute";
  iframe.style.width = "120vw";
  iframe.style.height = "120vh";
  iframe.title = "YouTube video player";
  iframe.style.left = "50%";
  iframe.style.top = "50%";
  iframe.style.transform = "translateX(-50%) translateY(-50%)";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

  let vid = "xQ92XiwyFBs";
  if (location.search.includes("?bgv=")) {
    vid = location.search.replace("?bgv=", "");
  }

  iframe.src = `https://www.youtube.com/embed/${vid}?enablejsapi=1&controls=0&rel=0&playsinline=1&showinfo=0&origin=*&mute=1&autoplay=1&loop=1`;

  ctn.appendChild(iframe);

  opEl.innerHTML = "<button>打开声音</button>";
  document.body.append(ctn);
  document.body.append(opEl);

  opEl.addEventListener(
    "click",
    () => {
      // @ts-ignore
      opEl.muted = !opEl.muted;
      iframe.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          // @ts-ignore
          func: opEl.muted ? "unMute" : "mute",
          args: [],
        }),
        "*"
      );
    },
    false
  );
}

createYtbBg();

export default createYtbBg;
