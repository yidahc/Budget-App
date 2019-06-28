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
      category: "Select Category",
    };
    this.handleInput = this.handleInput.bind(this)
    //otherwise it would be bound to the window
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setState = this.setState.bind(this)
  }
handleInput(event) {
  const {target} = event;
  const {name, value} = target;

  this.setState({
    [name]:value
  }); // name and value are in target
}
// handleChange(event, index, value) {
//   this.setState(category: category);
// }
handleSubmit(e) {
    e.preventDefault();
    const { purchase, price, category } = this.state;
    this.props.addItems('./daily', {
      purchase: purchase.toLowerCase(),
      price: price,
      category: category,
  });

    this.setState({
      purchase: "",
      price: 0,
      category: "utilities"
    });
  }
  
  render () {
      const { purchase, price, category } = this.state;
      console.log({category}, "!!!")
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
          />
        </label>
        <br />
        <label>
        Price: {' '}
        <input
          type="number"
          name= "price"
          value= {price}
          placeholder= {`$0`}
          onChange={this.handleInput}
        />
        </label>
        </form>
        <br />
        <select
        name="category"
        value={category}
        onChange={this.handleInput}
        >
          <option value="" disabled selected>Select Category</option>
          <option value="utilities">utilities</option>
          <option value="food">food</option>
          <option value="education">education</option>
          <option value="rent/housing">rent/housing</option>
          <option value="health/beauty">health/beauty</option>
          <option value="savings">savings</option>
          <option value="debt">debt</option>
          <option value="transportation">transportation</option>
          <option value="entertainment">entertainment</option>
          <option value="miscellaneous">miscellaneous</option>
        </select>
        <button
          onClick={this.handleSubmit}
        >Submit</button>
      </div>
      );
    }
  }

  export default AddPurchase;
