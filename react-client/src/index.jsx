import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import AddPurchase from './components/AddPurchase.jsx';
import ListItem from './components/ListItem.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  this.getItems = this.getItems.bind(this);
  this.addItems = this.addItems.bind(this);
  }
  componentDidMount() {
    this.getItems('./daily');
 }
  getItems(url) {
     $.ajax({
       url: url,
       method: 'GET',
       success: (results) => {
         this.setState({
           items: results
         });
       },
       error: (xhr, err) => {
         console.log('err', err);
       }
     });
   }

 /*
  getItems (url= '') {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        items: data,
      });
    })
    .catch(err => console.error(err));
}
*/
  addItems (url= '', data= {}) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(() => this.getItems(url))
    .catch(err => console.error(err));
}
  render () {
    const { items } = this.state;

    return (
      <div>
      <h1>Budget Tracker</h1>
      <AddPurchase getItems={this.getItems} addItems={this.addItems} />
      <List items={items} />
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

/*

Install nodemon by typing 'npm install -g nodemon'
5. Install all the projects dependencies by performing an npm install by typing 'npm install'
6. In the same terminal window, type 'npm run react-dev'. This will start webpack for transpilation of your jsx files
7. In a new terminal window, type 'npm run start'. This will start express web server for your site
*/
