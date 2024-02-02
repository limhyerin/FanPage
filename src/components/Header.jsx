import styled from "styled-components";

const StyledHeader = styled.header`
    background-image: url("${process.env.PUBLIC_URL}/public_assets/backgroundIMG.png");
    background-position: center;
    background-size: cover;
    height: 250px;
`;

const StyledLogoAndBtn = styled.div`
    height: 130px;
`;

const StyledLogoImage = styled.img`
    width: 13%;
`;

const StyledLogo = styled.div`
    text-align: center;
    padding-top: 80px;
`;

const StyledMemberClickButtons = styled.div`
    display: flex;
    width: 60%;
    height: 40%;
    margin: 10px auto 30px auto;
  
    border: 3px solid rgba(163, 163, 163, 0.205);
    border-radius: 8px;
    background-color: rgba(222, 226, 235, 0.781);
`;

const StyledMemberBtn = styled.button`
    width: 22%;
    margin: 1% 2% 1% 2%;
    border: 3px solid rgba(163, 163, 163, 0.205);
    border-radius: 8px;
  
    background-color: rgba(210, 216, 228, 0.692);
    &:hover {
        border: 3px solid rgba(21, 78, 192, 0.692);
    }
`;

const Header = ({setSelectBtn}) => {
    return <StyledHeader>
                <StyledLogoAndBtn>
                <StyledLogo>
                    <StyledLogoImage alt="logo" src={`${process.env.PUBLIC_URL}/public_assets/logo.png`}/>                    
                </StyledLogo>
                <StyledMemberClickButtons>
                    <StyledMemberBtn onClick={() => {
                        setSelectBtn('winter')
                    }}>윈터</StyledMemberBtn>
                    <StyledMemberBtn onClick={() => {
                        setSelectBtn('karina')
                    }}>카리나</StyledMemberBtn>
                    <StyledMemberBtn onClick={() => {
                        setSelectBtn('ningning')
                    }}>닝닝</StyledMemberBtn>
                    <StyledMemberBtn onClick={() => {
                        setSelectBtn('giselle')
                    }}>지젤</StyledMemberBtn>
                </StyledMemberClickButtons>
                </StyledLogoAndBtn>
            </StyledHeader>
}

export default Header