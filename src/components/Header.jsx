import styled from "styled-components";
import React from "react";

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
    padding-top: 120px;
`;

const Header = () => {
    return <StyledHeader>
                <StyledLogoAndBtn>
                <StyledLogo>
                    <StyledLogoImage alt="logo" src={`${process.env.PUBLIC_URL}/public_assets/logo.png`} onClick={() => window.location.reload()}/>                    
                </StyledLogo>
                </StyledLogoAndBtn>
            </StyledHeader>
}

export default Header