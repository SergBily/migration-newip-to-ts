import News from './news/news';
// import Sources from './sources/sources';
import { ResponseData, NewsStructure, SourcesStructure } from '../../types/interfaces';
import SortSources from './sources/sortSources';

export type ResponseDataNews = Omit<ResponseData, 'sources'>;
export type ResponseDataSources = Omit<ResponseData, 'totalResults' | 'articles'>;

export class AppView {
    private news: News;
    private sortSources: SortSources;

    constructor() {
        this.news = new News();
        this.sortSources = new SortSources();
    }

    public drawNews(data: ResponseDataNews): void {
        const values: NewsStructure[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: ResponseDataSources): void {
        const values: SourcesStructure[] = data?.sources ? data?.sources : [];
        this.sortSources.sort(values);
    }
}

export default AppView;
