interface NewsStructureSource {
    id: string | null;
    name: string;
}

export interface NewsStructure {
    author: string | null;
    content: string;
    description: string;
    publishedAt: string;
    source: NewsStructureSource;
    title: string;
    url: string;
    urlToImage: string;
}

export interface SourcesStructure {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface ResponseData {
    status: string;
    totalResults: number;
    articles: [NewsStructure];
    sources: [SourcesStructure];
}
