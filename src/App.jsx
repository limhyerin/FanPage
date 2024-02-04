import React, { useState } from "react";
import Header from "./components/Header";
import Member from "./components/Member";
import Main from "./components/Main";
import Footer from "./components/Footer";
import MyContext from "./shared/Context";
import styled from "styled-components";
import './App.css';

const StyledContainer = styled.div`
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
    <MyContext.Provider value={{data, setData, selectBtn, setSelectBtn, selectWho, setSelectWho}}>
      <Header />
      <StyledBox>
        <Member />
        <StyledInputLetterContainer>
          <Main/>
          <Footer/>
        </StyledInputLetterContainer>
      </StyledBox>
    </MyContext.Provider>
  </StyledContainer>
);
}

export default App;
