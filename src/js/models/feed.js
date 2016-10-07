import { FeedItem } from './feed-item';

export class Feed {
    constructor(feedData) {
        this.title = feedData.title;
        this.description = feedData.description;
        this.feedUrl = feedData.feedUrl;
        this.siteUrl = feedData.siteUrl;
        this.id = feedData.id;
    }
}
