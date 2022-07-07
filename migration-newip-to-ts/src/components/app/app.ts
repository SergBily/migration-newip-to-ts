import AppController from '../controller/controller';
import { AppView, ResponseDataNews, ResponseDataSources } from '../view/appView';
import SortSources from '../view/sources/sortSources';

class App {
    private controller: AppController;
    private view: AppView;
    private sortSources: SortSources;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
        this.sortSources = new SortSources();
    }

    public start(): void {
        (document.querySelector('.sources') as HTMLDivElement).addEventListener('click', (e) =>
            this.controller.getNews(e, (data: ResponseDataNews) => this.view.drawNews(data))
        );
        this.controller.getSources((data: ResponseDataSources) => this.view.drawSources(data));
        (document.querySelector('.select__content') as HTMLDivElement).addEventListener(
            'click',
            this.sortSources.getSourcesOfCategory
        );
    }
}

export default App;
