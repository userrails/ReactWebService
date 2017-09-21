import React from 'react';
import ReactDOM from 'react-dom';

import ItemLister from './ItemLister'

ReactDOM.render(
	<div>
    <h1>Welcome to my site.</h1>
    <ItemLister apiUrl="http://localhost:4000/posts" />
  </div>, document.getElementById("root")
);
