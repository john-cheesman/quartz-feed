import { FeedMe } from 'feedme';
import { Http } from 'http';

export class FeedFactory {
    constructor(url) {
        this.parser = new FeedMe();
        this.url = url;
    }

    getFeed() {

    }
}
