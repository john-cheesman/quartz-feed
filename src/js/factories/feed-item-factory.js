import RequestPromise from 'request-promise';
import { FeedItem } from '../models/feed-item';
import { api } from '../constants/api';

export class FeedItemFactory {
    static getAggregatedFeedItems(urls, offset = 0, limit = null) {
        let options,
            urlsString;

        urlsString = urls.join(',');

        options = {
            uri: `${api.url}${api.endpoints.getAggregatedFeedItems}?urls=${urlsString}&offset=${offset}&limit=${limit}`,
            withCredentials: false
        };

        RequestPromise(options)
            .then((response) => {
                return new Feed(JSON.parse(response));
            })
            .catch((error) => {
                console.error(`Unable to get feed: ${error}`);
            });
    }
}
