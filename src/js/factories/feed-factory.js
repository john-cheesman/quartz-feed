import RequestPromise from 'request-promise';
import { Feed } from '../models/feed';
import { api } from '../constants/api';

export class FeedFactory {
    static getFeed(url, offset = 0, limit = null) {
        let options;

        options = {
            uri: `${api.url}${api.endpoints.getFeed}?url=${url}&offset=${offset}&limit=${limit}`,
            withCredentials: false
        };

        return RequestPromise(options)
            .catch((error) => {
                console.error(`Unable to get feed: ${error}`);
            });
    }
}
