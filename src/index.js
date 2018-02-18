import React from 'react';
import ReactDOM from 'react-dom'; // eslint-disable-line import/no-extraneous-dependencies
import ReactDOMServer from 'react-dom/server'; // eslint-disable-line import/no-extraneous-dependencies
import App from './App';

if (typeof document !== 'undefined') {
	ReactDOM.hydrate(
		<App />,
		document.getElementById('app'),
	);
}

export default (locals, callback) => {
	const app = ReactDOMServer.renderToString(<App />);
	const html = `<html>
 <head>
   <link rel="stylesheet" href="/styles.css"/>
	<meta charset="utf-8">
	<title>Erich Behrens - Frontend Developer</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Home page for my open source projects.">
 </head>
 <body>
	 <div id="app">${app}</div>
	 <script src="/bundle.js"></script>
 </body>
</html>`;
	callback(null, html);
};
