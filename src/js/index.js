import { App } from './models/app';
import { HomeController } from './controllers/home-controller';
import { defaultSettings } from './constants/default-settings';

function init() {
    let app,
        home;

    app = new App(defaultSettings);
    home = new HomeController(app);

    home.addFeed(`https://www.smashingmagazine.com/feed/`);
    home.addFeed(`https://scotch.io/feed/`);
}

init();
