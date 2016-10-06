export function feedItemTemplate(feedItem) {
    return `
        <article>
            <h2><a href="${feedItem.url}">${feedItem.title}</a></h2>
            <time datetime="${feedItem.published}">${feedItem.published}</time>
        </article>
    `;
};
