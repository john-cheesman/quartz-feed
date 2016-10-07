import { Feed } from '../../src/js/models/feed';

export function FeedSpec() {
    describe(`Feed`, () => {
        let feed,
            feedData;

        beforeEach(() => {
            spyOn(Feed, `constructor`).and.callThrough();

            feedData = {
                title: `Feed title`,
                description: `Feed description`,
                feedUrl: `feed.site.com/feed`,
                siteUrl: `feed.site.com`
            };

            feed = new Feed(feedData);
        });

        it(`should create a new feed`, () => {
            expect(feed).toEqual(jasmine.any(Feed));
        });

        it(`should set the title`, () => {
            expect(feed.title).toEqual(`Feed title`);
        });

        it(`should set the description`, () => {
            expect(feed.description).toEqual(`Feed description`);
        });

        it(`should set the feedUrl`, () => {
            expect(feed.feedUrl).toEqual(`feed.site.com/feed`);
        });

        it(`should set the siteUrl`, () => {
            expect(feed.siteUrl).toEqual(`feed.site.com`);
        });
    });
};
