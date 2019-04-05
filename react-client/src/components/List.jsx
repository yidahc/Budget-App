import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({ items }) => {
  // <ListItem key = {item.id} purchase={item.purchase} price ={item.price}/>
      return (
        <div>
        <table>
          <thead>
          <tr>
            <th>Purchase</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
         {items.map(x =>{
          return (
            <tr>
              <td>{x.purchase}</td>
              <td>{`$${x.price}`}</td>
            </tr>
          )
        })}
    </tbody>
    </table>
  </div>
)
}

export default List;
