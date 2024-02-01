import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [selectBtn, setSelectBtn] = useState('');
return (
  <div className="container">
    <Header setSelectBtn={setSelectBtn} />
    <Main data={data} setData={setData}/>
    <Footer data={data} selectBtn={selectBtn}/>
  </div>
);
}

export default App;
