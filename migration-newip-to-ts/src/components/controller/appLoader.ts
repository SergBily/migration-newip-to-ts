import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '555e9f6315384d43836dc93814d47f05', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
