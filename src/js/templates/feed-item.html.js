import { TemplateHelpers } from '../utilities/template-helpers';

export function feedItemTemplate(model) {
    return `
        <article>
            <h2><a href="${model.url}">${model.title}</a></h2>

            ${model.content}

            <time datetime="${model.published.toISOString()}">${TemplateHelpers.formatDate(model.published)}</time>
        </article>
    `;
};
