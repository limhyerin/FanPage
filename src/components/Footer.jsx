import React from "react";

const Footer = ({data}) => {
    return <footer>
                {
                    data.filter((item) => !item.isDone).map((item) => (
                        <div key={item.id} className="boxContainer">
                            <div className="box" onClick={() => {
                                alert('박스 클릭!');
                            }}>
                                <div className="profileZone">
                                    <img className="profileIMG" alt="profileImg" src={`${process.env.PUBLIC_URL}/public_assets/profile.jpg`}/>  
                                </div>
                                <div className="contentsZone">
                                    <h3>{item.nickName}</h3>
                                    <p>{item.time}</p>
                                    <p>{item.contents}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </footer>
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
