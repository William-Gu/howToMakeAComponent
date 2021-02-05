import React, { useEffect, useState } from 'react';
import Item from "./item";
import {getList} from "../../api"
import "./index.css";

const obj = {
  id: 1,
  title: "我是主题",
  subtitle: "我是主题",
  time: "2021-01-01",
  owner: "楼主大人",
  isFavourite: false,
  isDelete: true
}
const resData = new Array(10).fill(0).map((item, key) => {
  var data = JSON.parse(JSON.stringify(obj));
  
  data.id += key;
  data.title += key;
  return data;
});

function List(props) {
  // 声明
  const [list, setList] = useState([]);

  useEffect(()=>{
    getData();
  },[])

  async function getData(obj){
    let res = resData.map(item=>{
      console.log(item);
      
      if(item.id === 8){
        item._hasFav = !false;
      }
      return item;
    })
    setList(res);
  }

  // 事件
  async function handleDelete(obj){
    console.log('删除', obj);
    return;
    let res, data;
    try {
      res = await getList();
      if(res.code === 1 && res.data){
        data = res.data;
      }
    } catch (error) {
      // 报错
    }
    setList(data);
  }

  async function handleFavourite(data){
    console.log('收藏',data);
  }

  return (
    <div className="nav-list">
      {
        list.map(item => {
          return <Item key={item.id} data={item} onFavourite={handleFavourite} onDelete={handleDelete}/>
        })
      }
    </div>
  );
}

export default List;
