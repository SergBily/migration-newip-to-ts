import App from './components/app/app';
import Control from './components/control/control';
import './global.css';

const app: App = new App();
app.start();
const control = new Control();
control.toggleList();
