import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Member from "./components/Member";
import Main from "./components/Main";
import Footer from "./components/Footer";
import MyContext from "./shared/Context";

function App() {
  // 로컬스토리지에서 데이터 불러오기
  const stroredData = JSON.parse(localStorage.getItem(['data']));
  const [data, setData] = useState(stroredData);
  const [selectBtn, setSelectBtn] = useState('');
  const [selectWho, setSelectWho] = useState('winter');

return (
  <div className="container">
    <MyContext.Provider value={{data, setData, selectBtn, setSelectBtn, selectWho, setSelectWho}}>
      <Header />
      <div className="box">
        <Member />
        <div className="inputLetterContainer">
          <Main/>
          <Footer/>
        </div>
      </div>
    </MyContext.Provider>
  </div>
);
}

export default App;
