import { SourcesStructure } from '../../../types/interfaces';
import Control from '../../control/control';
import './sortSources.css';
import Sources from './sources';

class SortSources {
    private sources: Sources;
    static data: SourcesStructure[];

    constructor() {
        this.sources = new Sources();
    }

    public sort(data: SourcesStructure[]): void {
        SortSources.data = data;
        const category: Set<string> = new Set();

        data.forEach((item) => {
            category.add(item.category.toUpperCase());
        });

        this.sources.madeListCategory(category);
    }

    public getSourcesOfCategory(e: MouseEvent): void {
        if ((e.target as HTMLInputElement).classList[0] === 'select__input') return;

        const target: string = (e.target as HTMLDivElement).innerHTML.toLowerCase();

        const targetCategory: SourcesStructure[] = [];
        const source: Sources = new Sources();
        const control: Control = new Control();

        SortSources.data.forEach((item) => {
            if (item.category === target) targetCategory.push(item);
        });

        control.closeListSources();
        control.cleanCategory();
        setTimeout(() => source.draw(targetCategory), 500);
    }
}

export default SortSources;
