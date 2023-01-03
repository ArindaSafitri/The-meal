class AppBar extends HTMLElement {
  
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

    connectedCallback() {
      this.render();
    }
   
    render() {
      this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          width: 100%;
          background-color: rgb(214, 177, 211);
          color: white;
          font-size: 20px;
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          text-align: center;
        }
        h3 {
          padding: 10px;
          letter-spacing: -1px;
        }
        h2{
          padding: 10px;
        }
        </style>

       <h2>Chicken Cook</h2> <h3>find a variety of chicken preparations!!</h3>
      `;
    }
  }
   
  customElements.define("app-bar", AppBar);