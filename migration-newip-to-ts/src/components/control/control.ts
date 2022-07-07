class Control {
    public listenerLabels(labels: NodeListOf<Element>): void {
        const select = document.querySelector('.select') as HTMLDivElement;
        const selectTitle = document.querySelector('.select__title') as HTMLDivElement;

        for (let i = 0; i < labels.length; i++) {
            labels[i].addEventListener('click', (e) => {
                selectTitle.textContent = (e.target as HTMLLabelElement).textContent;

                select.setAttribute('data-state', 'close');
            });
        }
    }

    public cleanCategory(): void {
        const list = document.querySelector('.sources') as HTMLDivElement;
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }

    public toggleList(): void {
        const select = document.querySelector('.select') as HTMLDivElement;

        const title = document.querySelector('.select__title') as HTMLDivElement;

        title.addEventListener('click', () => {
            if ('open' === select.getAttribute('data-state')) {
                select.setAttribute('data-state', 'close');
            } else {
                select.setAttribute('data-state', 'open');
            }
        });
    }

    public openListSources(): void {
        (document.querySelector('.sources') as HTMLDivElement).classList.add('source__open');
    }
    public closeListSources(): void {
        (document.querySelector('.sources') as HTMLDivElement).classList.remove('source__open');
    }
}

export default Control;
