import React, { useEffect, useState } from 'react'

export const ProductTable = (props) => {
  const { products, columns } = props;
  const [items, setItems] = useState([
    {
      id: '',
      name: '',
      department: '',
      price: '',
      currency: '',
    }
  ]);

  const [tableColumns, setTablecolumns] = useState(
    {
      id: true,
      name: true,
      department: true,
      price: true,
      currency: true,
    }
  );

  useEffect(() => {
    console.log('called', products, columns);
    if (products) {
      setItems(products);
    }

    if (columns) {
      setTablecolumns(columns);
    }
  }, [products, columns]);

  return (
    <div id="product-table">
      <header>
        <strong>Products ({products.length} items)</strong>
      </header>
      <table>
        <thead>
          <tr>
            {tableColumns.id && <th>ID</th>}
            {tableColumns.name && <th>Name</th>}
            {tableColumns.department && <th>Department</th>}
            {tableColumns.price && <th>Price</th>}
            {tableColumns.currency && <th></th>}
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              {tableColumns.id && <td>{item?.id}</td>}
              {tableColumns.name && <td>{item?.name}</td>}
              {tableColumns.department && <td>{item?.department}</td>}
              {tableColumns.price && <td>{item?.price}</td>}
              {tableColumns.currency && <td>{item?.currency}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
