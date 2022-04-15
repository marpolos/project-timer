import React from "react";
import { useTimer } from "../../hooks/useHours";
import BtnGeneral from "./styles";

const Button = ({ name, disabled }) => {
    const { handleChangeTimer, handleZero } = useTimer();
    return (
        <BtnGeneral
         type="button"
         onClick={ name !== 'Zerar' ? handleChangeTimer : handleZero }
         disabled={ disabled }
         >
             { name }
        </BtnGeneral>
    );
};

export default Button;
