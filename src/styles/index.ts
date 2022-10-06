import createReboot from "/src/styles/reboot";
import createScheme from "/src/styles/schemes";

// @ts-ignore
document.adoptedStyleSheets = [createScheme().styleSheet!, createReboot().styleSheet!];
