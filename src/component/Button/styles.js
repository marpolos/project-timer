import styled from 'styled-components';

const BtnGeneral = styled.button`
/* From uiverse.io by @nikk7007 */
 padding: 0.8em 1.8em;
 border: 2px solid rgb(192, 142, 55);
 position: relative;
 overflow: hidden;
 background-color: transparent;
 text-align: center;
 text-transform: uppercase;
 font-size: 16px;
 transition: .3s;
 z-index: 1;
 font-family: inherit;
 color: rgb(176, 144, 204);

&::before {
 content: '';
 width: 0;
 height: 300%;
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%) rotate(45deg);
 background: rgb(137, 181, 143);
 transition: .5s ease;
 display: block;
 z-index: -1;
}

&:hover::before {
 width: 105%;
}

&:hover {
 color: rgb(192, 142, 55);
}
`;

export default BtnGeneral;