import styled from "styled-components"

const StyledText = styled.textarea`
    width: 90%;
    //border: 3px solid rgb(0, 0, 0);
    //border-radius: 8px;
`;
const InputData = ({title, placeholder, value, onChange}) => {
    return <>
        <p><strong>{title}</strong></p>
        <StyledText type="text" 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </>
}

export default InputData