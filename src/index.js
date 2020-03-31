import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);

const element = <h1>[[[Hello, world!]]]<br></br>{ Date() }</h1>;
ReactDOM.render(
  element,
  document.getElementById('example')
  // document.getElementById('root')
);

// timer component
class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state={ seconds:0 };
  }

  tick(){
    this.setState(state=>({
      seconds:state.seconds+1
    }));
  }

  componentDidMound(){
    this.interval=setInterval(() => this.tick(),1000);
  }

  componentWillUnmount(){
    // clearInterval(this.interval);
  }

  render(){
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

// ReactDOM.render(
//   <Timer />,
//   document.getElementById('example2')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
