import './sources.css';
import { SourcesStructure } from '../../../types/interfaces';
import Control from '../../control/control';

class Sources {
    private control: Control;

    constructor() {
        this.control = new Control();
    }

    public draw(data: SourcesStructure[]): void {
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLDivElement;

            (sourceClone.querySelector('.source__item-name') as HTMLSpanElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLDivElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLDivElement).append(fragment);
        this.control.openListSources();
    }

    public madeListCategory(list: Set<string>): void {
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const sourceItemTemp = document.querySelector('#sortStructure') as HTMLTemplateElement;
        let count = 0;

        list.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLDivElement;

            const input = sourceClone.querySelector('.select__input') as HTMLInputElement;
            input.classList.add(`${item.toLowerCase()}`);
            input.id = `select${count}`;
            const label = sourceClone.querySelector('.select__label') as HTMLLabelElement;
            label.textContent = item;
            label.htmlFor = `select${count}`;

            fragment.append(sourceClone);
            count += 1;
        });
        (document.querySelector('.select__content') as HTMLDivElement).append(fragment);

        const labels: NodeListOf<Element> = document.querySelectorAll('.select__label');

        this.control.listenerLabels(labels);
    }
}

export default Sources;
