import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Button } from 'antd';

function App() {
// useEffect(() => {
//   axios.post('http://dqm-backend-1494-develop.sy/rules/warninglevels')
//   .then((res)=>{console.log('axios 获取数据成功:'+JSON.stringify(res))  })
//   .catch((error)=>{console.log('axios 获取数据失败'+error)})
//   },[])

  const getData = () => {
    console.log('ininin');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button type="primary" onClick={getData}>点击调用接口</Button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
