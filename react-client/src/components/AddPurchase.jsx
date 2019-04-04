import React from 'react';

class AddPurchase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      purchase: "",
      price: "",
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
      price,
  });
//(`$${price}`)
    this.setState({
      purchase: "",
      price: "",
    });
  }
  render () {
      const { purchase, price } = this.state;
      const { addItems, getItems} = this.props;
      return (
      <div>
        <label>
          Description: {' '}
          <input
            type="text"
            name= "purchase"
            value= {purchase}
            placeholder= "Enter Purchase Item"
            onChange={this.handleInput}
          />
        </label>
        <br />
        <label>
        Quantity: {' '}
        <input
          type="number"
          name= "price"
          value= {price}
          placeholder= "Enter Price"
          onChange={this.handleInput}
        />
        </label>

        <br />
        <button
          onClick={this.handleSubmit}>Submit</button>
      </div>
      );
    }
  }

  export default AddPurchase;
