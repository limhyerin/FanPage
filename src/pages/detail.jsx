import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

function Detail() {
  // url에서 id 값 받아오기
  const { id } = useParams();
  const storedData = JSON.parse(localStorage.getItem('data'));
  const item = storedData.find((item) => item.id === id);

  const editHandler = () => {
    alert("수정 기능 구현 예정!");
  }
  const deleteHandler = () => {
    alert("삭제 기능 구현 예정!");
  }
  return (
    <div>
      <div>detail</div>
      <Link to="/">Home</Link>
      <h3>{item.nickName}</h3>
      <p>{item.time}</p>
      <p>{item.contents}</p>
      <button onClick={editHandler}>수정</button>
      <button onClick={deleteHandler}>삭제</button>
    </div>
    )
}
export default Detail