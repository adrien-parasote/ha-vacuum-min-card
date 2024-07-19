import { CSSResultGroup, LitElement, html } from 'lit';
import { state } from 'lit/decorators/state.js';

import styles from './css/editor.css';
import { Config } from './types';

export class VacuumCardMinTypeScriptEditor extends LitElement {
    @state() _config;

    setConfig(config: Config) {
        if (!config.entities) {
            throw new Error('You need to define entities');
        }
        this._config = config;
    }

    static get styles(): CSSResultGroup {
        return styles;
    }

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
            composed: true,
        });
        this.dispatchEvent(messageEvent);
    }
}
