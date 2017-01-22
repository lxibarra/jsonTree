
import React from 'react';

/*const style = {
  backgroundColor: 'white',
  display:'inline-block',
  border:'solid 1px #ccc',
  padding:5,
  borderRadius: 3,

}*/

const NodeCreator = ({style, propertyName, propertyValue})=>{
  return (
  <div className="jb-addRemoveNode" style={style}>
    <input type="text" placeholder="Property name" value={propertyName||''} /> : <input type="text" placeholder="Property Value" value={propertyValue||''} /> <button>Save</button> <button>Cancel</button> | <button className="jb-btn jb-add">+</button><button className="jb-btn jb-remove">-</button>
  </div>)
}

export default NodeCreator;
