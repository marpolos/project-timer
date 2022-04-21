import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
padding-bottom: 10px;
`;

export const InputNumber = styled.input`
background-color: rgb(137, 181, 143);
border: 1px black solid;
font-size: 50px;
font-family: 'SpongeBob Font Wide', sans-serif;
text-align: center;
`;

export const FormInputs = styled.form`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
button {
    background-color: rgb(176, 144, 204);
    border: none;
    height: 50px;
}
`;