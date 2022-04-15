import React from "react";
import { useTimer } from "../../hooks/useHours";
import BtnGeneral from "./styles";

const Button = ({ name, disabled }) => {
    const { handleChangeTimer, handleZero } = useTimer();

    const directClick = () => {
        
    }
    return (
        <BtnGeneral
         type="button"
         onClick={ name === 'Zerar' ? handleZero : handleChangeTimer }
         disabled={ disabled }
         >
             { name }
        </BtnGeneral>
    );
};

export default Button;
