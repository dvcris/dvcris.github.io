import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

import './reset.css';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
