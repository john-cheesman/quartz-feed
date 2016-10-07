import { feedItemTemplate } from './feed-item.html';

export function feedItemListTemplate(model) {
    let feedItems = ``;

    model.items.forEach((item) => {
        feedItems += feedItemTemplate(item);
    });

    return `
        <section class="feed-items">
            ${feedItems}
        </section>
    `;
};
