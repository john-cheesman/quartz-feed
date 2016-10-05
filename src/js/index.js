import { App } from './models/app';
import { FeedFactory } from './factories/feed-factory';
import { defaultSettings } from './constants/default-settings';

function init() {
    let app;

    app = new App(defaultSettings);

    app.feeds.push(FeedFactory.getFeed(`http://johncheesman.org.uk/feed.xml`, 0, app.settings.feedLimit));

    console.log(app.feeds);
}

init();
