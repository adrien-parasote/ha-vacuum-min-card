import { VacuumCardMinTypeScript } from './card';
import { VacuumCardMinTypeScriptEditor } from './editor';

declare global {
    interface Window {
        customCards: Array<object>;
    }
}

// Define custom elements
customElements.define('vacuum-card-min', VacuumCardMinTypeScript);
customElements.define('vacuum-card-min-editor', VacuumCardMinTypeScriptEditor);

// Create render card
window.customCards = window.customCards || [];
window.customCards.push({
    type: 'vacuum-card-min',
    name: 'Vacuum card minimal',
    description:
        'Minimal card to monitor vacuum cleaner for Home Assistant Lovelace UI',
});
