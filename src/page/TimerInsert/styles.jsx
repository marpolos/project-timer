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

&[type=number]::-webkit-inner-spin-button { 
  all: unset; 
  min-width: 21px;
  min-height: 45px;
  margin: 17px;
  padding: 0px;
  background-image: 
  linear-gradient(to top, transparent 0px, transparent 16px, rgb(137, 181, 143) 16px, rgb(137, 181, 143) 26px, transparent 26px, transparent 35px, #000 35px,#000 36px,transparent 36px, transparent 40px),
  linear-gradient(to right, transparent 0px, transparent 10px, #000 10px, #000 11px, transparent 11px, transparent 21px);
  transform: rotate(90deg) scale(0.8, 0.9);
  cursor:pointer;
}
`;
/* customizar input https://pt.stackoverflow.com/questions/336061/estilizar-um-input-type-number-para-trocar-as-setas
 */
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