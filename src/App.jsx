import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import MyContext from "./shared/Context";

function App() {
  const [data, setData] = useState([]);
  const [selectBtn, setSelectBtn] = useState('');

return (
  <div className="container">
    <MyContext.Provider value={{data, setData, selectBtn, setSelectBtn}}>
      <Header />
      <Main/>
      <Footer/>
    </MyContext.Provider>
  </div>
);
}

export default App;
