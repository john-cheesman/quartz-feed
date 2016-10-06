import {Feed} from '../../src/js/models/feed';

export function FeedSpec() {
    describe('Feed', () => {
        let feed,
            feedData;

        beforeEach(() => {
            spyOn(Feed, 'constructor').and.callThrough();

            feedData = {
                items: [
                    {
                        author: `john-cheesman`,
                        publishedDate: {
                            date: `2016-01-01`
                        },
                        content: `<p>content</p>`,
                        title: `Post`
                    }
                ]
            };
            feed = new Feed(feedData);
        });

        it('should create a new feed', () => {
            expect(feed).toEqual(jasmine.any(Feed));
        });
    });
};
