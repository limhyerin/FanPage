import styled from "styled-components"

const StyledText = styled.textarea`
    width: 90%;
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