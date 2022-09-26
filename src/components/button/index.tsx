import React from "react";
import style from './Button.module.scss';

function Button({ texto } : { texto: string }) {
  return <button className={style.botao}> {texto} </button>;
}

export default Button;
