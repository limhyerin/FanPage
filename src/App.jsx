import React, { useState } from "react";
import Header from "./components/Header";
import Member from "./components/Member";
import Main from "./components/Main";
import Footer from "./components/Footer";
import styled from "styled-components";
import './App.css';

const StyledContainer = styled.div`
    /* background-image: url("${process.env.PUBLIC_URL}/public_assets/back.png");
    background-position: center;
    background-size: cover; */
    background-color: #82718f;
`;

const StyledBox = styled.div`
    width: 92%;
    margin: 10px auto auto auto;
    border-radius: 8px;
    border: 3px solid transparent;
    background-color: #0000007b;
`;

const StyledInputLetterContainer = styled.div`
    display: flex;
`;

function App() {
  // 로컬스토리지에서 데이터 불러오기
  const stroredData = JSON.parse(localStorage.getItem(['data'])) || [];
  const [data, setData] = useState(stroredData);
  const [selectBtn, setSelectBtn] = useState('winter');
  const [selectWho, setSelectWho] = useState('winter');

return (
  <StyledContainer>
    <Header />
    <StyledBox>
      <Member setSelectBtn={setSelectBtn}/>
      <StyledInputLetterContainer>
        <Main data={data} setData={setData} selectWho={selectWho} setSelectWho={setSelectWho}/>
        <Footer data={data} selectBtn={selectBtn}/>
      </StyledInputLetterContainer>
    </StyledBox>
  </StyledContainer>
);
}

export default App;
