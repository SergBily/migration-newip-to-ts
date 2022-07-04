import News from './news/news';
import Sources from './sources/sources';
import { ResponseData, NewsStructure, SourcesStructure } from '../../types/index';

export type ResponseDataNews = Omit<ResponseData, 'sources'>;
export type ResponseDataSources = Omit<ResponseData, 'totalResults' | 'articles'>;

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: ResponseDataNews): void {
        const values: NewsStructure[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: ResponseDataSources): void {
        const values: SourcesStructure[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
