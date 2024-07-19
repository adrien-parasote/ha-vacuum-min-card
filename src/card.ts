import { HomeAssistant } from 'custom-card-helpers';
import { HassEntity } from 'home-assistant-js-websocket';
import { CSSResultGroup, LitElement, nothing } from 'lit';
import { state } from 'lit/decorators/state.js';

import styles from './css/card.css';
import {
    cardContent,
    cardError,
    cardFooter,
    cardHeader,
    haCard,
} from './html/card.html';
import { Config } from './types';

export class VacuumCardMinTypeScript extends LitElement {
    // internal reactive states
    @state() private _header: string | typeof nothing;
    @state() private _entity: string;
    @state() private _name: string;
    @state() private _state: HassEntity;
    @state() private _status: string;
    @state() private _version: string;

    // private property
    private _hass;

    // lifecycle interface
    setConfig(config: Config) {
        this._header = config.header === '' ? nothing : config.header;
        this._entity = config.entity;
        this._version = 'COMPONENT_VERSION_VALUE'; // String will be replaced by Rollup
        // call set hass() to immediately adjust to a changed entity
        // while editing the entity in the card editor
        if (this._hass) {
            this.hass = this._hass;
        }
    }

    set hass(hass: HomeAssistant) {
        this._hass = hass;
        this._state = hass.states[this._entity];
        if (this._state) {
            this._status = this._state.state;
            const fn = this._state.attributes.friendly_name;
            this._name = fn ? fn : this._entity;
        }
    }

    // declarative part
    static get styles(): CSSResultGroup {
        return styles;
    }

    render() {
        return haCard(
            this._header,
            cardHeader(this._entity),
            !this._state
                ? cardError(this._entity)
                : cardContent(this._name, this.doToggle, this._status),
            cardFooter(this._version),
        );
    }

    // event handling
    doToggle() {
        this._hass.callService('input_boolean', 'toggle', {
            entity_id: this._entity,
        });
    }

    // card configuration
    static getConfigElement() {
        return document.createElement('toggle-card-typescript-editor');
    }

    static getStubConfig() {
        return {
            entity: 'input_boolean.tcts',
            header: '',
        };
    }
}
