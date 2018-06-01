import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppProvider from 'components/app/AppProvider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppProvider />, document.getElementById('root'));
registerServiceWorker();
