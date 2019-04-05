import React from 'react';

const styles = {
      width: 300,
      fontSize: "30px"
  };

class AddPurchase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      purchase: "",
      price: 0,
      value: 1,
    };
    this.handleInput = this.handleInput.bind(this)
    //otherwise it would be bound to the window
    this.handleSubmit = this.handleSubmit.bind(this)
  }
handleInput(event) {
  const {target} = event;
  const {name, value} = target;

  this.setState({
    [name]:value
  }); // name and value are in target
}

handleSubmit(e) {
    e.preventDefault();
    const { purchase, price } = this.state;
    //this.props.postData(description.toLowerCase(), quantity);
    this.props.addItems('/daily', {
      purchase: purchase.toLowerCase(),
      price: price,
  });
//(`$${price}`)
    this.setState({
      purchase: "",
      price: 0,
    });
  }
  render () {
      const { purchase, price, value } = this.state;
      return (
      <div>
      <form>
        <label>
          Purchase: {' '}
          <input
            type="text"
            name= "purchase"
            value= {purchase}
            placeholder= "Enter Purchase Item"
            onChange={this.handleInput}
            required
          />
        </label>
        <br />
        <label>
        Price: {' '}
        <input
          type="number"
          name= "price"
          value= {price}
          placeholder= "$0"
          onChange={this.handleInput}
        />
        </label>
        </form>

        <br />
        <button
          onClick={this.handleSubmit}>Submit</button>
      </div>
      );
    }
  }

  export default AddPurchase;
