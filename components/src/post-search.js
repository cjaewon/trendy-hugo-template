import { html } from 'lit-html';
import { component } from 'haunted';

function PostSearch() {
  return html`
    <div class="search">
      <input type="text" />
    </div>
  `;
}

customElements.define('post-search', component(PostSearch, { useShadowDOM: false }));