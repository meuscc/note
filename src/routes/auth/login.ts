import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import req from "~/lib/http/req";

@customElement("page-login")
export default class extends LitElement {
  static styles = [
    // language=css
    css``,
  ];
  @state()
  formData = {
    username: "",
    password: "",
  };

  handleChange = (field: string) => (event: any) => {
    // @ts-ignore
    this.formData[field] = event.target.value;
  };

  handleSubmit = (e: any) => {
    e.preventDefault();

    req.post("/api/auth/login", this.formData).then((res) => {
      const token = res.data.access_token;
      localStorage.setItem("access_token", token);
    });
  };

  constructor() {
    super();
  }

  override render() {
    return html`
      <div class="container">
        <form @submit=${this.handleSubmit}>
          <input type="text" @change=${this.handleChange("username")} />
          <input type="password" @change=${this.handleChange("password")} />

          <button class="btn btn-primary" type="submit">登陆</button>
        </form>
      </div>
    `;
  }
}
