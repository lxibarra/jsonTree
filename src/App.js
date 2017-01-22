import React, { Component } from 'react';
//import AddRemoveNodes from './addRemoveNodes';
import NodeCreator from './NodeCreator';
import ListItem from './ListItem';
import treeCreator from './treeCreator';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount() {
      this.setState({
        style:{},
        items:[],
        data:{
          firstElement:1,
          resources:[
            {uno:1},
            {
              dos:{
              someProp:2,
              otherProp:{
                  sub1:1,
                  sub2:true,
                  sub3:[
                    {}
                  ]
              }
            }
           }
          ]
        }
      });
  }

  showAddRemove(e) {

    if(e.nativeEvent.target.nodeName === 'SPAN') {
      this.setState({
        style:{
          left: e.nativeEvent.target.offsetLeft + e.nativeEvent.target.offsetWidth,
          top:e.nativeEvent.target.offsetTop,
          display:'block'
        },
        propertyName:e.nativeEvent.target? e.nativeEvent.target.getAttribute('data-prop') : '',
        propertyValue:e.nativeEvent.target? e.nativeEvent.target.getAttribute('data-value') : ''
      });
    }
  }

  render() {

    let List = this
      .state
      .items
      .map((item, index)=>
         (<ListItem key={index} propertyName={item.propertyName} propertyValue={item.propertyValue}  />)
     );

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>JSON Builder</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="jsonBuilder">
          <ul onMouseOver={this.showAddRemove.bind(this)}>
            <li>
              <span>Root</span>
              <ul>
                  {List}
                  {treeCreator(this.state.data)}
              </ul>
            </li>
          </ul>
        </div>
        <NodeCreator style={this.state.style} propertyName={this.state.propertyName} propertyValue={this.state.propertyValue}/>
      </div>
    );
  }
}

export default App;
