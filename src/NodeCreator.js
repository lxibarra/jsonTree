import React from 'react';

const style = {
  backgroundColor: 'white',
  display:'inline-block',
  border:'solid 1px #ccc',
  padding:5,
  borderRadius: 3,
  
}

const NodeCreator = ()=>(
  <div style={style}>
    <input type="text" placeholder="Property name"/> : <input type="text" placeholder="Property Value" /> <button>Save</button> <button>Cancel</button>
  </div>
);

export default NodeCreator;
