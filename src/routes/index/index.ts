import { customElement } from "lit/decorators.js";
import { html, LitElement } from "lit";

@customElement("page-home")
export default class extends LitElement {
  override render() {
    return html`
      <div>
        <div>士大夫十分十大撒旦发生声道士大夫士大夫</div>
        <div>默认按钮</div>
        <y-button color="default">sfs是否是</y-button>
        <y-button color="primary">sfs是否是</y-button>
        <y-button color="secondary">sfs是否是</y-button>
        <y-button color="info">sfs是否是</y-button>
        <y-button color="success">sfs是否是</y-button>
        <y-button color="warning">sfs是否是</y-button>
        <y-button color="error">sfs是否是</y-button>

        <div>文字按钮</div>
        <y-button color="default" variant="text">sfs是否是</y-button>
        <y-button color="primary" variant="text">sfs是否是</y-button>
        <y-button color="secondary" variant="text">sfs是否是</y-button>
        <y-button color="info" variant="text">sfs是否是</y-button>
        <y-button color="success" variant="text">sfs是否是</y-button>
        <y-button color="warning" variant="text">sfs是否是</y-button>
        <y-button color="error" variant="text">sfs是否是</y-button>

        <div>线框按钮</div>
        <y-button color="default" variant="outlined">sfs是否是</y-button>
        <y-button color="primary" variant="outlined">sfs是否是</y-button>
        <y-button color="secondary" variant="outlined">sfs是否是</y-button>
        <y-button color="info" variant="outlined">sfs是否是</y-button>
        <y-button color="success" variant="outlined">sfs是否是</y-button>
        <y-button color="warning" variant="outlined">sfs是否是</y-button>
        <y-button color="error" variant="outlined">sfs是否是</y-button>

        <div>实心按钮</div>
        <y-button color="default" variant="contained">sfs是否是</y-button>
        <y-button color="primary" variant="contained">sfs是否是</y-button>
        <y-button color="secondary" variant="contained">sfs是否是</y-button>
        <y-button color="info" variant="contained">sfs是否是</y-button>
        <y-button color="success" variant="contained">sfs是否是</y-button>
        <y-button color="warning" variant="contained">sfs是否是</y-button>
        <y-button color="error" variant="contained">sfs是否是</y-button>
      </div>
    `;
  }
}
