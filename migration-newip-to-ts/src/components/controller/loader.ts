type Endpoint = 'sources' | 'everything';
type PartsResponce = Record<string, unknown>;
type GetUrlOptions = {
    readonly apiKey: string;
    sources?: string;
};

class Loader {
    private readonly baseLink: string;
    private readonly options: Pick<GetUrlOptions, 'apiKey'>;

    constructor(baseLink: string, options: Pick<GetUrlOptions, 'apiKey'>) {
        this.baseLink = baseLink;
        this.options = options;
    }

    protected getResp<T>(
        { endpoint, options = {} }: { endpoint: Endpoint; options?: PartsResponce },
        callback: (data: T) => void = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    protected errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    protected makeUrl(options: PartsResponce, endpoint: Endpoint): string {
        const urlOptions: GetUrlOptions = { ...this.options, ...options };

        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key as keyof GetUrlOptions]}&`;
        });
        return url.slice(0, -1);
    }

    protected load<U>(
        method: string,
        endpoint: Endpoint,
        callback: (data: U) => void,
        options: PartsResponce = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data: U) => {
                callback(data);
            })
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
