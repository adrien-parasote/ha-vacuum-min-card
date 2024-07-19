import { html } from 'lit';

export const haCard = (name, header, content, footer) => html`
    <ha-card header="${name}">
        <div class="card-header">${header}</div>
        <div class="card-content">${content}</div>
        <div class="card-footer">${footer}</div>
    </ha-card>
`;

export const cardError = (entity) =>
    html`<p class="error">${entity} is unavailable.</p>`;

export const cardHeader = (vacuum, imgSrc) =>
    html`<div>
        <img class="vacuum ${vacuum.state}" src="${imgSrc}" />
        <div class="properties">
            <div class="vacuum-name">${vacuum.name}</div>
            <div class="vacuum-state">${vacuum.attributes.state}</div>
        </div>
        <div class="battery">
            <ha-icon icon="${vacuum.attributes.battery_icon}"></ha-icon>
            <span class="icon-title">${vacuum.attributes.battery_level}%</span>
        </div>
    </div> `;

export const cardContent = () => html` <div>todo</div>`;

export const cardFooter = (version) =>
    html`<div class="footer">v${version}</div>`;
