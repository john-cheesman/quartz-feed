import FeedMe from 'feedme';
import RequestPromise from 'request-promise';

export class FeedFactory {
    static getFeed(url) {
        let parser;

        parser = new FeedMe(true);

        RequestPromise(url)
            .then((response) => {
                parser.on('end', function() {
                    return parser.done();
                });

                response.pipe(parser);
            })
            .catch((error) => {
                console.error(`Unable to get feed: ${error}`);
            });
    }
}
