import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({ items }) => {
  function formatDate(date) {
  var datestamp = new Date(date);
  return datestamp.toDateString();
}
  // <ListItem key = {item.id} purchase={item.purchase} price ={item.price}/>
      return (
        <div>
        <table>
          <thead>
          <tr>
            <th>Purchase</th>
            <th>Price</th>
            <th>Day</th>
          </tr>
        </thead>
        <tbody>
         {items.map(x =>{
          return (
            <tr key={x.id}>
              <td>{x.purchase}</td>
              <td>{`$${x.price}`}</td>
              <td>{formatDate(x.day)}</td>
            </tr>
          )
        })}
    </tbody>
    <tfoot>
      <tr>
        <td>Total</td>
        <td></td>
      </tr>
    </tfoot>
    </table>
  </div>
)
}

export default List;

// https://www.carlrippon.com/formatting-dates-and-numbers-in-react/
