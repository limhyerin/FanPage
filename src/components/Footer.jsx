import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

const Footer = ({data, selectBtn}) => {
    const navigate = useNavigate();
    const filteredData = data.filter((item) => item.iswho === selectBtn);
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
                                    {console.log(data)}
                                </StyledContentZone>
                            </StyledBox>
                        </div>
                    ))
                }
            </StyledFooter>
}

export default Footer



// 왼쪽 사진
// 오른쪽 닉네임, 시간, 내용
// 아래 수정, 삭제 버튼
// 삭제 버튼 클릭시 정말로 삭제 하겠냐는 안내창 띄우기
// 마우스 올리면 hover() 커져보이는
// 클릭시 새 페이지 이동 -> 

// 새 페이지에서 홈으로 돌아가는 버튼 하나,
// 사진, 닉네임, to.누구, 시간, 수정 input창
// 수정완료 버튼
// 클릭시 이대로 수정하시겠습니까? 물어보고 확인 누르면 수정
// `${process.env.PUBLIC_URL}/public_assets/profile.jpg`