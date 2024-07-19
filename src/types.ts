import { LovelaceCardConfig } from 'custom-card-helpers';
import {
    HassEntityAttributeBase,
    HassEntityBase,
} from 'home-assistant-js-websocket';

export interface Config extends LovelaceCardConfig {
    header: string;
    entity: string;
}

export type VacuumEntityState =
    | 'cleaning'
    | 'docked'
    | 'idle'
    | 'paused'
    | 'returning'
    | 'error'
    | 'unknown'
    | string;

export interface VacuumEntityAttributes extends HassEntityAttributeBase {
    state?: VacuumEntityState;
    battery_level?: number;
    battery_icon?: string;
}

export interface VacuumEntity extends HassEntityBase {
    attributes: VacuumEntityAttributes;
    name?: string;
}
