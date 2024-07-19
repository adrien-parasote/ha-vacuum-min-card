import { html } from 'lit';

export const haCard = (top, content, footer) => html`
    <ha-card>
        <div class="card-top">${top}</div>
        <div class="card-content">${content}</div>
        <div class="card-footer">${footer}</div>
    </ha-card>
`;

export const cardError = (entity) =>
    html`<p class="error">${entity} is unavailable.</p>`;

export const cardTop = (vacuum, imgSrc) =>
    html`<img class="vacuum ${vacuum.state}" src="${imgSrc}" />
        <div class="properties">
            <div class="vacuum-name">${vacuum.name}</div>
            <div class="vacuum-state">${vacuum.attributes.state}</div>
        </div>
        <div class="battery">
            <ha-icon icon="${vacuum.attributes.battery_icon}"></ha-icon>
            <span class="icon-title">${vacuum.attributes.battery_level}%</span>
        </div> `;

export const cardContent = () =>
    html`<div>home</div>
        <div>STOP / Start</div>
        <div>Clean room with list</div> `;

export const cardFooter = (version) =>
    html`<div class="footer">v${version}</div>`;
