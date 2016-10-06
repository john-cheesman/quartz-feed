import { FeedItem } from './feed-item';

export class Feed {
    constructor(feedObject) {
        this.items = [];
        this.url = feedObject.feedUrl;

        feedObject.items.forEach((item) => {
            this.items.push(new FeedItem(item));
        });
    }
}
