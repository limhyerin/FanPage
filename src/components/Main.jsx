import InputData from "./InputData";
import { useState } from "react";
import uuid from "react-uuid";
// import styled from "styled-components"

const Main = ({data, setData}) => {
    const [nickName, setNickName] = useState('');
    const [contents, setContents] = useState('');
    const [profileImg, setProfileImg] = useState('');
    const [selectWho, setSelectWho] = useState('winter');

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
            setData([newData, ...data]);
            setNickName(''); // 등록 후 닉네임 초기화
            setContents(''); // 등록 후 내용 초기화
            setProfileImg(''); // 등록 후 프로필 url 초기화
        } else {
            alert("닉네임과 내용은 필수 입력값입니다.");
        }
    }
    return <main>
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
                    <button className="regist" onClick={clickAddHandler}>펜레터 등록</button>
                </div>
            </main>
}

export default Main