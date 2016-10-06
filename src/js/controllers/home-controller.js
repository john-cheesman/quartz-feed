import { Controller } from '../models/controller';
import { FeedItem } from '../models/feed-item';
import { FeedItemFactory } from '../factories/feed-item-factory';
import { feedItemTemplate } from '../templates/feed-item.html';

export class HomeController extends Controller {
	constructor(app) {
		super(app);
	}

	index() {
		let target,
			feedItems,
			template;

		target = document.querySelector('.content');

		FeedItemFactory.getAggregatedFeedItems([`http://johncheesman.org.uk/feed.xml`], 0, this.app.settings.feedLimit)
	        .then((response) => {
	            JSON.parse(response).forEach((item) => {
	                let feedItem,
	                    output;

                    feedItem = new FeedItem(item);
	                output = feedItemTemplate(feedItem);

	                target.innerHTML += output;
	            });
	        });
	}
}