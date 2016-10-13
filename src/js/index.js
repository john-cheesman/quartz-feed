import { App } from './models/app';
import { HomeController } from './controllers/home-controller';
import { defaultSettings } from './constants/default-settings';

function init() {
    let app,
        home,
        addFeedForm;

    app = new App(defaultSettings);
    home = new HomeController(app);
    addFeedForm = document.querySelector([name="add-feed"]);

    addFeedForm.addEventListener('submit', (event) => {
        console.log(event);
        event.preventDefault();
    });

    home.addFeed(`https://www.smashingmagazine.com/feed/`);
    home.addFeed(`https://scotch.io/feed/`);
}

init();
