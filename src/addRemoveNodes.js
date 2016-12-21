import React from 'react';



const addRemoveNodes = ({style, target})=>(
  <div className="jb-addRemoveNode" style={style}>
    <button className="jb-btn jb-add">edit</button>
    <button className="jb-btn jb-add">+</button>
    <button className="jb-btn jb-remove">-</button>
  </div>
)


export default addRemoveNodes;
