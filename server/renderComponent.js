const App = require('../dist/bundle').default;
const React = require('react');
const ReactDOM = require('react-dom/server');
const axios = require('axios');

const dburl = process.env.DBURL || 'http://ec2-54-215-241-119.us-west-1.compute.amazonaws.com';

const getDBData = async id => axios.get(`${dburl}/${id}`).then(res => res.data);

const getRenderedComponent = async (id) => {
  const itemData = await getDBData(id);
  const html = ReactDOM.renderToString(React.createElement(App, { data: itemData }));

  return html;
}

module.exports = getRenderedComponent;
