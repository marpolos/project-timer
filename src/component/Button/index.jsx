import React from "react";
import { useTimer } from "../../hooks/useHours";
import BtnGeneral from "./styles";

const Button = ({ name, disabled }) => {
    const { handleInitTimer, handleZero, handleStopTimer } = useTimer();

    const redirectClick = () => {
        if (name === 'Zerar') handleZero();
        else if (name === 'Iniciar') handleInitTimer();
        else handleStopTimer();
    }
    return (
        <BtnGeneral
         type="button"
         onClick={ redirectClick }
         disabled={ disabled }
         >
            { name }
        </BtnGeneral>
    );
};

export default Button;
