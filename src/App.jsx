import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([]);
  const [selectBtn, setSelectBtn] = useState('');

  // 로컬 스토리지에서 데이터 불러오기
  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if(storedData) {
      setData(JSON.parse(storedData));
    }
  }, [])

  // 로컬 스토리지 데이터 저장
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

return (
  <div className="container">
    <Header setSelectBtn={setSelectBtn} />
    <Main data={data} setData={setData}/>
    <Footer data={data} selectBtn={selectBtn}/>
  </div>
);
}

export default App;
