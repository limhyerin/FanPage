import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
    background-color: rgb(107, 99, 90);
`;

const StyledHomeBtn = styled.img`
  width: 3%;
  margin: 10px auto auto 10px;
`;

const StyledProfileIMG = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 70%;
    text-align: center;
    margin-top: 50px;
`; 

const StyledMain = styled.main`
  width: 70%;
  margin: 50px auto 50px auto;
  padding-bottom: 50px;
  text-align: center;
  border: 3px solid rgba(255, 255, 255, 0.692);
  border-radius: 8px;
`;

// 기존 팬레터 내용
const StyledContent = styled.p`
  width: 500px;
  margin: 10px auto 10px auto;
  border: 3px solid rgba(255, 255, 255, 0.692);
  border-radius: 8px;
  padding: 20px;
`;

// 수정하는 팬레터 박스
const StyledNewcontent = styled.textarea`
  width: 500px;
  height: 70px;
  border: 3px solid rgba(255, 255, 255, 0.692);
  border-radius: 8px;
  padding: 20px;
`;

const StyledFooter = styled.footer`
  height: 50px;
`;

function Detail() {
  // url에서 id 값 받아오기
  const { id } = useParams();
  const storedData = JSON.parse(localStorage.getItem('data'));
  const item = storedData.find((item) => item.id === id);
  const navigate = useNavigate();

  // 글자수 제한
  let [inputCount, setInputCount] = useState(0); 

  // 수정 기능
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(item.contents);

  const editHandler = () => {
    setIsEditing(true);
  }

  const cancelEditHandler = () => {
    setIsEditing(false);
    setEditData(item.contents);
  }

  const saveHandler = () => {
    setIsEditing(false);
    // 수정한 내용 저장
    const updateData = storedData.map((data) => {
      if(data.id === id) {
        return {...data, contents: editData};
      }
      return data;
    });
    // 수정된 데이터 로컬 스토리지에 저장
    localStorage.setItem('data', JSON.stringify(updateData));
  }

  const deleteHandler = () => {
    const confirmDelete = window.confirm('정말로 삭제하시겠습니까?');
    if(confirmDelete) {
      // 삭제된 데이터 제외하고 저장
      const updateData = storedData.filter((data) => data.id !== id);
      localStorage.setItem('data', JSON.stringify(updateData));

      // 삭제 후 홈 페이지로 이동
      navigate(`/`);
    }
  }
  return (
    <StyledContainer>
      <header>
        <Link to="/"><StyledHomeBtn alt="btn" src={`${process.env.PUBLIC_URL}/public_assets/HomeBtn.png`}/></Link>
      </header>
      <StyledMain>
        <div>
          <StyledProfileIMG alt="profileImg" src={item.profileImg}/>
        </div>
        <div>
          <h3>{item.nickName}</h3>
          <p>{item.time}</p>
          {isEditing ? (
            <div>
              <StyledNewcontent
              value={editData}
              onChange={(e) => {
                setEditData(e.target.value)
                setInputCount(e.target.value.length);
              }}
              maxLength={100}
              />
              <p>
                <span>{inputCount}</span>
                <span>/100 자</span>
              </p>
            </div>
          ) : (
            <StyledContent>{item.contents}</StyledContent>
          )}
          {isEditing ? (
            <>
              <button onClick={saveHandler}>완료</button>
              <button onClick={cancelEditHandler}>삭제</button>
            </>
          ) : (
            <>
              <button onClick={editHandler}>수정</button>
              <button onClick={deleteHandler}>삭제</button>
            </>
          )}
        </div>
      </StyledMain>
      <StyledFooter>
        <div>
          <p>footer부분</p>
        </div>
      </StyledFooter>
    </StyledContainer>
  )
}

export default Detail