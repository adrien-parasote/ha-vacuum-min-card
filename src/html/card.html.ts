import { html } from 'lit';

export const haCard = (name, header, content, footer) => html`
    <ha-card header="${header}">
        <div class="card-header">${header}</div>
        <div class="card-content">${content}</div>
        <div class="card-footer">${footer}</div>
    </ha-card>
`;

export const cardError = (entity) =>
    html`<p class="error">${entity} is unavailable.</p>`;

export const cardHeader = (entity) => html`<p>${entity} is available.</p>`;

export const cardContent = (name, toggleCb, status) =>
    html` <dl class="dl">
        <dt class="dt">${name}</dt>
        <dd class="dd" @click="${toggleCb}">
            <span class="toggle ${status}">
                <span class="button"></span>
            </span>
            <span class="value">${status}</span>
        </dd>
    </dl>`;

export const cardFooter = (version) => html`<p>v${version}</p>`;
