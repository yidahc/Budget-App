import React from 'react';

const List = ({ items, totals }) => {
  function formatDate(date) {
  var datestamp = new Date(date);
  return datestamp.toDateString()
}
var obj = totals[0]

var int;
for (var i in obj) {
  if (i === "Total") {
    int = obj[i]
  }
}
//totals.map(e => console.log(e))  // <ListItem key = {item.id} purchase={item.purchase} price ={item.price}/>
      return (
        <center>
        <div>
        <table>
          <thead>
          <tr>
            <th>Purchase</th>
            <th>Price</th>
            <th>Day</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
         {items.map(x =>{
          return (
            <tr key={x.id}>
              <td>{x.purchase}</td>
              <td>{`$${x.price}`}</td>
              <td>{formatDate(x.day)}</td>
              <td>{x.category}</td>
            </tr>
          )
        })}
    </tbody>
    <tfoot>
      <tr>
        <td>Total</td>
        <td>{`$${int}`}</td>
      </tr>
    </tfoot>
    </table>
  </div>
</center>
)
}

export default List;



//content, design
// no phones, no talking, only use read me resources, go outside 1 by 1, no food or drink
//
// https://www.carlrippon.com/formatting-dates-and-numbers-in-react/
