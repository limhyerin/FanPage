import InputData from "./InputData";
import React, { useState, useContext, useEffect } from "react";
import uuid from "react-uuid";
import styled from "styled-components"
import MyContext from "../shared/Context";

const StyledMain = styled.main`
    height: 250px;
    width: 30%;
  
    text-align: center;
    margin: 10px auto 10px auto;
    background-color: rgba(122, 90, 90, 0.623);
    border: 3px solid rgba(163, 163, 163, 0.205);
    border-radius: 8px;
  
    padding: 20px auto 20px auto;
`;

const StyledRegist = styled.main`
    width: 200px;
    height: 20%;
    margin: 10px auto 10px auto;
    border: 3px solid rgb(255, 255, 255);
    border-radius: 8px;
    background-color: rgba(210, 216, 228, 0.692);
    &:hover {
        border: 3px solid rgba(21, 78, 192, 0.692);
    }
`;

const Main = () => {
    const [nickName, setNickName] = useState('');
    const [contents, setContents] = useState('');
    const [profileImg, setProfileImg] = useState('');
    const [selectWho, setSelectWho] = useState('winter');
    const { data, setData } = useContext(MyContext); // 데이터에 접근

    const clickAddHandler = (event) => {
        if(nickName && contents) {
            const newData = {
                id: uuid(),
                nickName: nickName,
                contents: contents,
                profileImg: profileImg || `${process.env.PUBLIC_URL}/public_assets/profile.jpg`,
                time: new Date().toLocaleString(),
                iswho: selectWho,
            }
            setData([newData,...data]);
            setNickName(''); // 등록 후 닉네임 초기화
            setContents(''); // 등록 후 내용 초기화
            setProfileImg(''); // 등록 후 프로필 url 초기화
        } else {
            alert("닉네임과 내용은 필수 입력값입니다.");
        }
    }

    // 로컬 스토리지 데이터 저장
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data));
    }, [data]);
    
    return <StyledMain>
                <InputData
                    title={"닉네임"}
                    placeholder={"최대 20글자까지 작성할 수 있습니다"}
                    value={nickName}
                    onChange={(e) => {
                        setNickName(e.target.value);
                    }}
                />
                <InputData
                    title={"내용"}
                    placeholder={"최대 100글자까지 작성할 수 있습니다"}
                    value={contents}
                    onChange={(e) => {
                        setContents(e.target.value);
                    }}
                />
                <InputData
                    title={"프로필"}
                    placeholder={"프로필 이미지 url 작성"}
                    value={profileImg}
                    onChange={(e) => {
                        setProfileImg(e.target.value);
                    }}
                />
                <div className="whoSend">
                    <p>누구에게 보내실건가요?</p>
                    <select name="choice" value={selectWho} onChange={(e) => {
                        setSelectWho(e.target.value);
                    }}>
                        <option value="winter">윈터</option>
                        <option value="karina">카리나</option>
                        <option value="ningning">닝닝</option>
                        <option value="giselle">지젤</option>
                    </select>
                    </div>
                    <div>
                    <StyledRegist onClick={clickAddHandler}>펜레터 등록</StyledRegist>
                </div>
            </StyledMain>
}

export default Main