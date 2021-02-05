import React, { useEffect, useState } from 'react';
import "./index.css";

const content = "我就是那个检测区域";

function getElementWidth(ele){
  return ele && ele.offsetWidth || 0;
}

function TestComp(props) {
  const [text, setText] = useState(content);
  const [res1, setRes1] = useState('');
  const [res2, setRes2] = useState('');

  function handleInitial(obj){
    setText(content);
    setRes1("");
    setRes2("");
  }
  
  function handleClick(){
    // 赋值前
    let textW = getElementWidth(document.getElementById("text"));
    setRes1(textW);
    
    setText("我要加长我要加长我要加长我要加长");

    // 赋值后
    let textW2 = getElementWidth(document.getElementById("text"));
    setRes2(textW2);
  }

  function handleClick2(){
    // 赋值前
    let textW = getElementWidth(document.getElementById("text"));
    setRes1(textW);
    
    setText("我要加长我要加长我要加长我要加长");

    // 赋值后
    let textW2 = getElementWidth(document.getElementById("text"));
    setRes2(textW2);
    setTimeout(()=>{
      let textW2 = getElementWidth(document.getElementById("text"));
      setRes2(textW2);
    })
  }

  return (
    <div>
      <div>
        <button onClick={handleClick}>检测</button>
        <button onClick={handleInitial}>初始化</button>
        <button onClick={handleClick2}>检测2</button>
      </div>
      <div>
        <p>检测区域：<span id="text">{text}</span></p>
        <p>赋值前检测：{res1}</p>
        <p>赋值后检测：{res2}</p>
      </div>
    </div>
  );
}

export default TestComp;
