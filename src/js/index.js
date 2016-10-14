import { App } from './models/app';
import { HomeController } from './controllers/home-controller';
import { defaultSettings } from './constants/default-settings';

function init() {
    let app,
        home,
        addFeedForm;

    app = new App(defaultSettings);
    home = new HomeController(app);
    addFeedForm = document.forms.namedItem(`add-feed`);

    addFeedForm.addEventListener(`submit`, (event) => {
        console.log(addFeedForm.querySelector(`[name="url"]`));
        home.addFeed(addFeedForm.querySelector(`[name="url"]`).value);
        event.preventDefault();
    });

    home.index();
}

init();
