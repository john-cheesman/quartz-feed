import { TemplateHelpers } from '../utilities/template-helpers';

export function feedItemTemplate(model) {
    let date;

    date = new Date(model.publishedDate.date);

    return `
        <article>
            <h2><a href="${model.url}">${model.title}</a></h2>

            ${TemplateHelpers.extractImageFromContent(model.content)}

            <time datetime="${date.toISOString()}">${TemplateHelpers.formatDate(date)}</time>
        </article>
    `;
};
