import AppController from '../controller/controller';
import { AppView, ResponseDataNews, ResponseDataSources } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start() {
        (document.querySelector('.sources') as HTMLDivElement).addEventListener('click', (e) =>
            this.controller.getNews(e, (data: ResponseDataNews) => this.view.drawNews(data))
        );
        this.controller.getSources((data: ResponseDataSources) => this.view.drawSources(data));
    }
}

export default App;
