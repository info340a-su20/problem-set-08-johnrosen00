import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./App";
import Senators from "./senators.json";
//render the App component here!

ReactDOM.render(<App senators={Senators}/>, document.getElementById('root'));
