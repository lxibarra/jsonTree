import React from 'react';
//algo https://jsfiddle.net/coder10/fofxgf3w/10/

const generateKey = (value)=> `${Math.random().toString(36).substring(7)}-${value}`;

const createTree = (data)=>{
  let li = [];
  for (let p in data) {
    if (data[p] instanceof Array) {
      li.push(<Li propertyName={p} key={generateKey(data[p])} propertyValue={JSON.stringify(data[p])}>[{createTree(data[p])}]</Li>)
    } else  if (typeof data[p] === 'object') {
      li.push(<Li propertyName={p} key={generateKey(data[p])} propertyValue={JSON.stringify(data[p])}>{String.fromCharCode(123)}{createTree(data[p])}{String.fromCharCode(125)}</Li>)
    } else {
      li.push(<Li propertyName={p} key={generateKey(data[p])} propertyValue={JSON.stringify(data[p])}  displayValue={data[p]}></Li>)
    }
  }
  return(
    <Ul>
      {li}
    </Ul>
  )
}


const Li = ({propertyName, propertyValue, displayValue, children=null})=>(
  <li>
    <span data-prop={propertyName} data-value={propertyValue}><code>{propertyName} : {displayValue}</code></span>
    {children}
  </li>
);

const Ul = ({children} : {children?: any})=>(
  <ul>{children}</ul>
);


export default createTree;
