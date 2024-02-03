import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MyContext from "../shared/Context";

const StyledFooter = styled.footer`
    width: 50%;
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
    width: 100px;
    height: 100px;
    border-radius: 70%;
    text-align: center;
`; 

const StyledProfileZone = styled.div`
    width: 20%;
    padding-top: 20px;
    padding-left: 20px;
`; 

const StyledContentZone = styled.div`
    width: 75%;
`; 

const StyledEmptyBox = styled.p`
    color: white;
    text-align: center;
`;

const Footer = () => {
    const navigate = useNavigate();
    const { data, selectBtn } = useContext(MyContext); // 데이터에 접근
    const filteredData = data.filter((item) => item.iswho === selectBtn);

    return <StyledFooter>
                {
                    filteredData.length > 0 ? (
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
                    ) : (
                        <StyledEmptyBox>등록된 글이 없습니다</StyledEmptyBox>
                    )
                }
            </StyledFooter>
}

export default Footer