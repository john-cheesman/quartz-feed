import RequestPromise from 'request-promise';
import { api } from '../constants/api';

export class FeedFactory {
    static getFeed(url) {
        let options;

        options = {
            uri: `${api.url}${api.endpoints.getFeed}?url=${url}`,
            withCredentials: false
        };

        return RequestPromise(options)
            .catch(error => console.error(`Unable to get feed: ${error}`));
    }
}
