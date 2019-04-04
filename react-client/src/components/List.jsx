import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({ items }) => {
  return(
    <div>
    {items.map(item => {
      return (
      <ListItem
        key = {item.id}
        purchase={item.purchase}
        price ={item.price}
        />
      )
    })
  }
  </div>
)
}

export default List;
