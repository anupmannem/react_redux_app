import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

imports routes from '../routes';

render(<Router history={browserHistory} router={routes} />, document.getElementById('app'));
