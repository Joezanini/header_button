const buttonTemplate = document.createElement("template");
buttonTemplate.innerHTML = /* html */`
    <style>
        .btn {
            background-color:rgb(0, 145, 255);
            color: white;
            border: none;
            border-radius: 15px;
            padding: 0 2rem;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            box-shadow: 0 4px 14px 0 rgb(0, 145, 255);
        }
    </style>
    <button class="btn"><slot>Button A</slot></button>
`


class Button extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
      this.attachShadow({mode: 'open'});
      // write element functionality in here
    }

    connectedCallback() {
        console.log("connectedcallback");
        this.shadowRoot.appendChild(buttonTemplate.content.cloneNode(true));
    }
  }

  customElements.define("app-button", Button);