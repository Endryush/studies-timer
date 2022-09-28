import React from "react";
import style from './Button.module.scss';

class Button extends React.Component<{
  texto: string
  type?: 'button' | 'submit' | 'reset' | undefined,
  onClick?: () => void
}> {
  render() {
    return (
      <button 
        type={this.props.type} 
        className={style.botao}
        onClick={this.props.onClick}
      > 
        {this.props.texto} 
      </button>
    );
  }
}

export default Button;
