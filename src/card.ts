import { HomeAssistant } from 'custom-card-helpers';
import { HassEntity } from 'home-assistant-js-websocket';
import { Context } from 'home-assistant-js-websocket';
import { CSSResultGroup, LitElement, nothing } from 'lit';
import { state } from 'lit/decorators/state.js';

import styles from './css/card.css';
import {
    cardContent,
    cardError,
    cardFooter,
    cardTop,
    haCard,
} from './html/card.html';
import VACUUM_IMAGE from './media/vacuum.svg';
import {
    Config,
    VacuumEntity,
    VacuumEntityAttributes,
    VacuumEntityState,
} from './types';

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

    get entity(): VacuumEntity {
        const context: Context = {
            id: 'context id',
            user_id: 'user_id',
            parent_id: 'parent_id',
        };
        const state: VacuumEntityState = 'cleaning';
        const attr: VacuumEntityAttributes = {
            state: state,
            battery_level: 90,
            battery_icon: 'mdi:battery-90',
        };
        const vacuum: VacuumEntity = {
            entity_id: 'entity_id',
            state: 'state',
            last_changed: 'last_changed',
            last_updated: 'last_updated',
            context: context,
            attributes: attr,
            name: 'Dobby',
        };
        return vacuum;
    }

    render() {
        // TODO : link with HA entity
        const vacuum = this.entity;
        return haCard(
            !this._state ? '' : cardTop(vacuum, VACUUM_IMAGE),
            !this._state
                ? cardError(this._entity)
                : cardContent(this._isRunning(vacuum)),
            cardFooter(this._version),
        );
    }

    // card configuration
    static getConfigElement() {
        return document.createElement('vacuum-card-min-editor');
    }
    /*
	static getStubConfig() {
	    return {
	        entity: 'input_boolean.tcvj',
	        header: '',
	    };
	}
	*/

    private _isRunning(vacuum: VacuumEntity): boolean {
        return vacuum.state == 'cleaning' || vacuum.state == 'returning';
    }
}
