import { App } from './models/app';
import { Feed } from './models/feed';
import { FeedFactory } from './factories/feed-factory';
import { defaultSettings } from './constants/default-settings';
import { feedItemTemplate } from './templates/feed-item.html';

function init() {
    let app;

    app = new App(defaultSettings);

    FeedFactory.getFeed(`http://johncheesman.org.uk/feed.xml`, 0, app.settings.feedLimit)
        .then((response) => {
            app.feeds.push(new Feed(JSON.parse(response)));
            app.feeds[0].items.forEach((item) => {
                let target,
                    output;

                target = document.querySelector(`.feed-items`);
                output = feedItemTemplate(item);

                target.innerHTML += output;
            });
        });
}

init();
