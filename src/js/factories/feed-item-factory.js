import RequestPromise from 'request-promise';
import { FeedItem } from '../models/feed-item';
import { api } from '../constants/api';

export class FeedItemFactory {
    static getAggregatedFeedItems(feeds, offset = 0, limit = null) {
        let options,
            urls,
            urlsString;

        urls = [];

        feeds.forEach((feed) => {
            urls.push(feed.feedUrl);
        });

        urlsString = urls.join(',');

        options = {
            uri: `${api.url}${api.endpoints.getAggregatedFeedItems}?urls=${urlsString}&offset=${offset}&limit=${limit}`,
            withCredentials: false
        };

        return RequestPromise(options)
            .catch((error) => {
                console.error(`Unable to get feed: ${error}`);
            });
    }
}
