import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '1857fd51b06641b09728ed545d64c24e', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
