import React from "react";
// import { useTimer } from "../../hooks/useHours";
import BtnGeneral from "./styles";

const Button = ({ name, onClick }) => {
    return (
        <BtnGeneral
          onClick={ onClick }
          type="button"
         >
            { name }
        </BtnGeneral>
    );
};

export default Button;
