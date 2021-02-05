function Feature(props) {
  return (
    <div className="nav-feat-box">
      {
        props.isFavourite ? (
          <div className="nav-feat-item">
          <button className="nav-feat-btn" data-favourite>收藏{}</button>
        </div> ) : null
      }
      <div className="nav-feat-item">
        <button className="nav-feat-btn  nav-feat-btn-delete"  data-delete>删除</button>
      </div>
    </div>
  );
}

export default Feature;
