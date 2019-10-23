import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import AddPurchase from './components/AddPurchase.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    // Our state is where we store the necessary information for each component
    // It is always an object and should only be altered using this.setState (do NOT do this.state.items = [3,8,6])
    // correct syntax: this.setState({items: [3,8,6]})
      items: [],
      totals: 0,
    };
  // binding methods to this instance of a react component (so that this.setState refers to the state in this component)
  this.getToday = this.getToday.bind(this);
  this.getTotals = this.getTotals.bind(this);
  this.addItems = this.addItems.bind(this);
  this.handleChange = this.handleChange.bind(this)
  }
  // function that runs as soon as this component mounts
  componentDidMount() {
    // get request to today endpoint and setting state to store the results
    this.getToday('./today');
    this.getTotals('./totals');
 }
  getToday(url) {
     // Perform an asynchronous HTTP (Ajax) request, using jquery ($.get() usually also works)
   // This example, using no options: $.ajax(); loads the contents of the current page, but does nothing with the result.
   //  To use the result, you can implement one of the callback functions.
     $.ajax({
      // A string containing the URL to which the request is sent. (in this case, our './today' endpoint)
       url: url,
    // The HTTP method to use for the request (e.g. "POST", "GET", "PUT") DEFAULT IS 'GET'
//       method: 'GET',
       success: (results) => {
        // Function to be called if the request succeeds. Gets passed the data returned from the server (formatted according to the dataType parameter or the dataFilter callback function, when specified),
        // a string describing the status; and the jqXHR object/XMLHttpRequest.
        this.setState({
      // We are storing the results received from the '/today' url in our state
           items: results
         });
       },
       error: (xhr, err) => {
      // Function to be called if the request fails. Gets passed 3 arguments: The jqXHR object/XMLHttpRequest, a string describing the type of error that occurred and an optional exception object, if one occurred. 
         console.log('err', err);
       //  Possible values for the error String (besides null) are "timeout", "error", "abort", and "parsererror"
      // When an HTTP error occurs, errorThrown receives the textual portion of the HTTP status, such as "Not Found" or "Internal Server Error." 
       }
     });
   }

   // As of jQuery 1.5, the success and error settings can accept an array of functions. Each function will be called in turn. 

   /* 
   https://api.jquery.com/jQuery.ajax/
   The callback hooks provided by $.ajax() are as follows:
   *beforeSend* callback option is invoked; it receives the jqXHR object and the settings object as parameters.
   *error* callback option is invoked, if the request fails. It receives the jqXHR, a string indicating the error type, and an exception object if applicable. Some built-in errors will provide a string as the exception object: "abort", "timeout", "No Transport".
   *dataFilter* callback option is invoked immediately upon successful receipt of response data. It receives the returned data and the value of dataType, and must return the (possibly altered) data to pass on to success.
   *success* callback option is invoked, if the request succeeds. It receives the returned data, a string containing the success code, and the jqXHR object.
   Promise callbacks — .done(), .fail(), .always(), and .then() — are invoked, in the order they are registered.
   *complete* callback option fires, when the request finishes, whether in failure or success. It receives the jqXHR object, as well as a string containing the success or error code.
   */

getAllExp (url= '') {
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      this.setState ({
        items: data,
      });
    })
    .catch(err => console.error(err));
}

  getTotals (url= '') {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        totals: data,
      });
      console.log(data)
    })
    .catch(err => console.error(err));
}

addItems (url= '', data= {}) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(() => this.componentDidMount())
    .catch(err => console.error(err));
}

handleChange(event, index, value) {
  this.setState({
    value: value,
  });
}
  render () {
    const { items, totals } = this.state;
    return (
      <div className= "header">
        <h1>Budget Tracker</h1>
        <AddPurchase getItems={this.getItems} items={items} addItems={this.addItems} />
        <List items={items} totals={totals} />
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
