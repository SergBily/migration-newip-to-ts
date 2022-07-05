import AppLoader from './appLoader';
import { ResponseDataNews, ResponseDataSources } from '../view/appView';

enum Endpoints {
    sources = 'sources',
    everything = 'everything',
}

class AppController extends AppLoader {
    public getSources(callback: (data: ResponseDataSources) => void): void {
        super.getResp<ResponseDataSources>(
            {
                endpoint: Endpoints.sources,
            },
            callback
        );
    }

    public getNews(e: MouseEvent, callback: (data: ResponseDataNews) => void): void {
        let target = e.target as HTMLSpanElement;
        const newsContainer = e.currentTarget as HTMLDivElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;

                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<ResponseDataNews>(
                        {
                            endpoint: Endpoints.everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLDivElement;
        }
    }
}

export default AppController;
