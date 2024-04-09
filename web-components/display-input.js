import { LitElement, css, html } from "lit";

export class DisplayInput extends LitElement {
  static properties = {
    title: {},
    _inputContent: { state: true },
  };

  static styles = css`
    :host {
      color: blue;
    }
  `;

  constructor() {
    super();

    this.title = "Input Title";
    this._inputContent = "initialValue";
  }

  inputOnChange() {
    this._inputContent = "changedValue";
  }

  render() {
    return html`
    <label> ${this.title} </label>
    <input type="text">${this._inputContent}</input>
    <button onclick="${this.inputOnChange}"> Check input value </button>
    <p> ${this._inputContent} </p>
    `;
  }
}
customElements.define("display-input", DisplayInput);
