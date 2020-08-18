import { LitElement, html } from 'lit-element';

class PostSearch extends LitElement {
  render() {
    return html`
      <div class="search">
        <input type="text" />
      </div>
    `;
  }
}
customElements.define('post-search', Comments); 