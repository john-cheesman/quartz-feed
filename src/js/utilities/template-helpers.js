import { getSource, getAltText } from 'extract-image-props-from-html-string';

export class TemplateHelpers
{
    static formatDate(date) {
        return `${date.getDate()} ${date.toLocaleString('en-GB', { month: 'long' })} ${date.getFullYear()}`;
    }

    static extractImageFromContent(content) {
        let src,
            alt;

        src = getSource(content);
        alt = getAltText(content);

        if (src && alt) {
            return `<img src="${src}" alt="${alt}" />`;
        }

        return ``;
    }
}
