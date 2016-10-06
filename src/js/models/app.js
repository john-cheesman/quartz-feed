export class App {
    constructor(settings = null) {
        this.settings = settings;
        this.feeds = [];

    }

    get feedsUrls() {
        let urls;

        urls = [];

        this.feeds.forEach((feed) => {
            urls.push(feed.url);
        });

        return urls;
    }
}
