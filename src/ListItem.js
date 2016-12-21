import React from 'react';

const ListItem = ({propertyName, propertyValue, children})=>(
  <li>
    <span>{propertyName} : {propertyValue}</span>
    {children}
  </li>
);

export default ListItem;
