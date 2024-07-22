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

export const cardContent = (running) =>
    html` <div>
            <ha-icon icon="mid-home" onclick="console.log('home')"></ha-icon>
            <span class="icon-title">Home</span>
        </div>
        <div>
            <ha-icon
                icon="${running ? html`mdi-pause` : html`mdi-play`}"
                onclick="console.log('play / pause ${running}')"
            ></ha-icon>
            <span class="icon-title"
                >${running ? html`Pause` : html`Clean`}</span
            >
        </div>`;

export const cardFooter = (version) =>
    html`<div class="footer">v${version}</div>`;
