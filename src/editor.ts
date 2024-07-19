import { css, html, LitElement } from 'lit';
import { styles } from './css/card.styles';
import { state } from 'lit/decorators/state.js';

export class VacuumCardMinTypeScriptEditors extends LitElement {
  @state() _config;

  setConfig(config) {
    this._config = config;
  }

  static styles = styles;

  render() {
    return html`
            <form class="table">
                <div class="row">
                    <label class="label cell" for="header">Header:</label>
                    <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="header" value="${this._config.header}"></input>
                </div>
                <div class="row">
                    <label class="label cell" for="entity">Entity:</label>
                    <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="entity" value="${this._config.entity}"></input>
                </div>
            </form>
        `;
  }

  handleChangedEvent(changedEvent: Event) {
    const target = changedEvent.target as HTMLInputElement;
    // this._config is readonly, copy needed
    const newConfig = Object.assign({}, this._config);
    if (target.id == 'header') {
      newConfig.header = target.value;
    } else if (target.id == 'entity') {
      newConfig.entity = target.value;
    }
    const messageEvent = new CustomEvent('config-changed', {
      detail: { config: newConfig },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(messageEvent);
  }
}
