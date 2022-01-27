import React, { Component } from 'react';
import { TailUiContext } from '../Context';
import { ITailUiTheme } from '../Context/default-theme';
import { GrowLoader } from '../Grow-loader';
interface IVariants {
  primary: string;
  secondary: string;
  primaryGhost: string;
}

interface IButton {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'primaryGhost';
  rounded?: boolean;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default class Button extends Component<IButton> {
  static defaultProps = {
    variant: 'primary',
    rounded: false,
    block: false,
    disabled: false,
    onClick: () => {},
    type: 'button',
    loading: false,
  };

  static contextType: React.Context<ITailUiTheme> = TailUiContext;

  render() {
    const { primaryColor, secondaryColor } = this.context;
    const { children, onClick, block, disabled, rounded, type, variant } = this.props;

    const variants: IVariants = {
      primary: `bg-${primaryColor}-600 text-white hover:bg-${primaryColor}-700`,
      secondary: `bg-${secondaryColor}-400 text-white hover:bg-${secondaryColor}-500`,
      primaryGhost: `bg-transparent text-${primaryColor}-600 border border-${primaryColor}-600`,
    };
    const buttonVariant = variant || 'primary';

    const classname = `${variants[buttonVariant]} ${rounded ? 'rounded-full' : 'rounded'} ${
      block ? 'block w-full ' : ''
    } h-10 px-4`;

    return (
      <button type={type} className={classname} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );
  }
}
