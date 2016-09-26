import {Feed} from '../../src/js/models/feed';

export function FeedSpec() {
    describe('Feed', () => {
        let feed;

        beforeEach(() => {
            spyOn(Feed, 'constructor').and.callThrough();

            feed = new Feed();
        });

        it('should create a new feed', () => {
            expect(feed).toEqual(jasmine.any(Feed));
        });
    });
};
