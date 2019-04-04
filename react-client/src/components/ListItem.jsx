import React from 'react';

const ListItem = ({ purchase, price }) => (
  <div>
  {`${purchase} $${price}`}
  </div>
)

export default ListItem;
