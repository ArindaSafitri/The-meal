class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
      this.render();
    }
    
    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }
   
    get value() {
      return this.shadowDOM.querySelector('#searchElement').value;
    }
   
    render() {
      this.shadowDOM.innerHTML = `
      <style>
      .search-container {
        max-width: 800px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 8px;
        border-radius: 10px;
        display: flex;
        position: sticky;
        top: 10px;
        background-color: rgb(214, 177, 211);
      }
      
      .search-container > input {
        width: 75%;
        padding: 10px;
        border: 0;
        border-bottom: 1px solid pink;
        font-weight: bold;
      }
      
      .search-container > input:focus {
        outline: 0;
        border-bottom: 2px solid pink;
      }
      
      .search-container > input:focus::placeholder {
        font-weight: bold;
      }
      
      .search-container > input::placeholder {
        color: pink;
        font-weight: normal;
      }
      
      .search-container > button {
        width: 5rem;
        height: 2.3rem;
        margin-left: auto;
        padding: 10px;
        border-radius: 20px;
        border: 2px solid black;
        background-color: rgb(214, 177, 211);;
        color: white;
        font-weight: bolder;
        cursor: pointer;
        text-transform: uppercase;
      }
      
      @media screen and (max-width: 550px) {
        .search-container {
          flex-direction: column;
          position: static;
        }
      
        .search-container > input {
          width: 100%;
          margin-bottom: 12px;
        }
      
        .search-container > button {
          width: 100%;
        }
       }
       </style>
        <div id="search-container" class="search-container">
          <input placeholder="Search food keywords >Chicken<" id="searchElement" type="search">
          <button id="searchButtonElement" type="submit">Search</button>
        </div>
      `;
   
      this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}
customElements.define('search-bar', SearchBar);