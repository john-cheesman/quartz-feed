export class Storage {
    static saveFeeds(feeds) {
        save('QuartzFeed_Feeds', feeds);
    }

    static loadFeeds() {
        return load('QuartzFeed_Feeds');
    }
}

function save(key, data) {
    let json;

    json = JSON.stringify(data);

    localStorage.setItem(key, json);
}

function load(key) {
    let json;

    json = localStorage.getItem(key);

    return JSON.parse(json);
}
