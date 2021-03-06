import { Controller } from '../models/controller';
import { FeedFactory } from '../factories/feed-factory';
import { FeedItemFactory } from '../factories/feed-item-factory';
import { feedItemListTemplate } from '../templates/feed-item-list.html';
import { Storage } from '../utilities/storage';

export class HomeController extends Controller {
    constructor(app) {
        super(app);
    }

    index() {
        let target,
            savedFeeds,
            feedItems,
            feedItemList,
            template;

        target = document.querySelector('.content');
        savedFeeds = Storage.loadFeeds();
        feedItemList = [];

        if (savedFeeds) {
            FeedItemFactory.getAggregatedFeedItems(savedFeeds, 0, this.app.settings.feedLimit)
                .then(JSON.parse)
                .then(response => response.forEach(item => feedItemList.push(item)))
                .then(() => target.innerHTML = feedItemListTemplate(feedItemList));
        }
        else {
            target.innerHTML = `<p>You have no feeds! <a href="#">Add some feeds here.</a></p>`;
        }
    }

    addFeed(url) {
        let feed,
            savedFeeds;

        savedFeeds = Storage.loadFeeds() || [];

        FeedFactory.getFeed(url)
            .then((response) => {
                feed = new Feed(JSON.parse(response));

                if (notAlreadySaved(feed, savedFeeds)) {
                    savedFeeds.push(feed);
                    Storage.saveFeeds(savedFeeds);
                }
                else {
                    console.warn(`${feed.title} is already added`);
                }

                this.index();
            });
    }

    viewFeeds() {

    }
}

function notAlreadySaved(feed, savedFeeds) {
    let notAlreadySaved;

    notAlreadySaved = true;

    savedFeeds.forEach((savedFeed) => {
        if (feed.id === savedFeed.id) {
            notAlreadySaved = false;
        }
    });

    return notAlreadySaved;
}
