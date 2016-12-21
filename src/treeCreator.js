import React from 'react';
//algo https://jsfiddle.net/coder10/fofxgf3w/10/

const createTree = (data)=>{
  let li = [];
  for (let p in data) {
    if (data[p] instanceof Array) {
      li.push(<Li propertyName={p}>[{createTree(data[p])}]</Li>)
    } else  if (typeof data[p] === 'object') {
      li.push(<Li propertyName={p}>{String.fromCharCode(123)}{createTree(data[p])}{String.fromCharCode(125)}</Li>)
    } else {
      li.push(<Li propertyName={p} propertyValue={data[p]}></Li>)
    }
  }
  return(
    <Ul>
      {li}
    </Ul>
  )
}


const Li = ({propertyName, propertyValue, children=null})=>(
  <li>
    <span><code>{propertyName} : {propertyValue}</code></span>
    {children}
  </li>
);

const Ul = ({children} : {children?: any})=>(
  <ul>{children}</ul>
);


export default createTree;
