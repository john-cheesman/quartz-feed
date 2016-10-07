export class FeedItemList
{
    constructor(feedItems = null) {
        this.items = feedItems || [];
    }

    add(feedItems) {
        Array.isArray(feedItems) ? Array.push.apply(this.items, feedItems) : this.items.push(feedItems);
    }
}
