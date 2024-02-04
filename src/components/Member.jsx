import React, { useContext } from "react";
import styled from "styled-components";
import MyContext from "../shared/Context";

const StyledMemberClickButtons = styled.div`
    display: flex;
    width: 590px;
    height: 50%;
    margin: 10px auto 30px auto;
    padding: 10px 10px 10px 10px;
    background-color: #ffffff37;
    border-radius: 8px;
`;

// 각 멤버들 이미지 css 및 hover 효과
const StyledMember = styled.img`
    width: 130px;
    height: 180px;
    margin-right: 5%;
    border-radius: 8px;
    border: 3px solid rgba(209, 195, 236, 0.26);
    -webkit-filter: grayscale(100%);
	filter: grayscale(100%);

    -webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .1s ease-in-out;
	transition: .1s ease-in-out;

    &:hover {
        -webkit-filter: grayscale(0);
	    filter: grayscale(0);

        -webkit-transform: scale(1.05);
	    transform: scale(1.05);
        border: 3px solid rgb(172, 160, 196);
    }
`;

const Member = () => {
    const { setSelectBtn } = useContext(MyContext); // 데이터에 접근

    return <StyledMemberClickButtons>
                <StyledMember alt="Img" src={`${process.env.PUBLIC_URL}/public_assets/winter.jpg`} onClick={() => {
                    setSelectBtn('winter')
                }}></StyledMember>
                <StyledMember alt="Img" src={`${process.env.PUBLIC_URL}/public_assets/karina.jpeg`} onClick={() => {
                    setSelectBtn('karina')
                }}></StyledMember>
                <StyledMember alt="Img" src={`${process.env.PUBLIC_URL}/public_assets/ningning.png`} onClick={() => {
                    setSelectBtn('ningning')
                }}></StyledMember>
                <StyledMember alt="Img" src={`${process.env.PUBLIC_URL}/public_assets/giselle.jpeg`} onClick={() => {
                    setSelectBtn('giselle')
                }}></StyledMember>
            </StyledMemberClickButtons>
}

export default Member