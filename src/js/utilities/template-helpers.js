export class TemplateHelpers
{
    static formatDate(date) {
        return `${date.getDate()} ${date.toLocaleString('en-GB', { month: 'long' })} ${date.getFullYear()}`;
    }

    static formatContent(content) {
        return content;
    }
}
