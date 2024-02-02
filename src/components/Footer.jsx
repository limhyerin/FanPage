import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MyContext from "../shared/Context";

const StyledFooter = styled.footer`
    width: 50%;
    text-align: center;
    background-color: rgba(122, 90, 90, 0.623);
    border: 3px solid rgba(163, 163, 163, 0.205);
    border-radius: 8px;
    padding: 20px 20px 20px 20px;
  
    margin: 10px auto 10px auto;
`;

const StyledBox = styled.div`
    background-color: transparent;
    border: 3px solid rgb(255, 255, 255);
    border-radius: 8px;
    margin-bottom: 10px;
    display: flex;
    padding: 10px 10px 10px 10px;
  
    text-decoration: none;
    color: black;
    &:hover {
        border: 3px solid rgba(21, 78, 192, 0.692);
    }
`; 
  
const StyledProfileIMG = styled.img`
    width: 90px;
    border-radius: 70%;
`; 

const StyledProfileZone = styled.div`
    width: 20%;
    padding-top: 20px;
`; 

const StyledContentZone = styled.div`
    width: 80%;
`; 

const Footer = () => {
    const navigate = useNavigate();
    const { data, setData, selectBtn } = useContext(MyContext); // 데이터에 접근
    const [filteredData, setFilteredData] = useState([]);
    // 로컬 스토리지에서 데이터 불러오기
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('myData')) || [];
        setData(storedData);
      }, [setData]);
      
      useEffect(() => {
        const newData = data.filter((item) => item.iswho === selectBtn);
        setFilteredData(newData);
      }, [data, selectBtn]);

    return <StyledFooter>
                {
                    filteredData.map((item) => (
                        <div key={item.id} className="boxContainer">
                            <StyledBox onClick={() => {
                                navigate(`/detail/${item.id}`);
                            }}>
                                <StyledProfileZone>
                                    <StyledProfileIMG alt="profileImg" src={item.profileImg}/>  
                                </StyledProfileZone>
                                <StyledContentZone>
                                    <h3>{item.nickName}</h3>
                                    <p>{item.time}</p>
                                    <p>{item.contents}</p>
                                </StyledContentZone>
                            </StyledBox>
                        </div>
                    ))
                }
            </StyledFooter>
}

export default Footer