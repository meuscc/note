import { css } from "lit";

// language=css
export default css`
  .y-scroll::-webkit-scrollbar {
    width: 8px;
  }

  .y-scroll::-webkit-scrollbar-track {
    background: transparent;
  }

  .y-scroll::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: transparent;
  }

  .y-scroll:hover::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.2);
  }

  .y-scroll::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;
