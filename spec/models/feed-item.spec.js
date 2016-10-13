import { FeedItem } from '../../src/js/models/feed-item';

export function FeedItemSpec() {
    describe(`FeedItem`, () => {
        let feedItem,
            feedItemData;

        beforeEach(() => {
            spyOn(FeedItem, `constructor`).and.callThrough();

            feedItemData = {
                title: `Feed item title`,
                url: `feed.site.com/feed-item`,
                publishedDate: {
                    date: `2016-01-01`
                },
                content: `<p>Feed item content</p>`,
                author: `Feed item author`
            };

            feedItem = new FeedItem(feedItemData);
        });

        it(`should create a new feed item`, () => {
            expect(feedItem).toEqual(jasmine.any(FeedItem));
        });

        it(`should set the title`, () => {
            expect(feedItem.title).toEqual(`Feed item title`);
        });

        it(`should set the url`, () => {
            expect(feedItem.url).toEqual(`feed.site.com/feed-item`);
        });

        it(`should set the published date`, () => {
            expect(feedItem.published).toEqual(jasmine.any(Date));
        });

        it(`should set the author`, () => {
            expect(feedItem.author).toEqual(`Feed item author`);
        });

        it(`should set the content`, () => {
            expect(feedItem.content).toEqual(`<p>Feed item content</p>`);
        });
    });
};
