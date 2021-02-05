function getData(){
  return {}
}


// 获取首页列表
export function getList(json){
  return getData('/user/remind/list', json)
}