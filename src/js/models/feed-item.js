export class FeedItem {
    constructor(feedItemObject) {
        this.author = feedItemObject.author;
        this.published = new Date(feedItemObject.publishedDate.date);
        this.title = feedItemObject.title;
        this.content = feedItemObject.content;
        this.url = feedItemObject.url;
    }
}
