import React, { Component } from 'react';
import { ITailUiTheme, TailUiContext } from '../Context';

interface IInput {
  label?: React.ReactNode;
  id: string;
  type?: string;
  name: string;
  labelPosition?: 'left' | 'right';
  placeholder?: string;
  defaultValue?: string;
  css?: string;
  onChange?: () => void;
}

export default class Input extends Component<IInput> {
  static defaultProps = {
    type: 'text',
  };

  static contextType: React.Context<ITailUiTheme> | undefined = TailUiContext;

  render() {
    const { labelPosition, id, name, type, label, onChange, placeholder, defaultValue, css } =
      this.props;

    const { primaryColor } = this.context;
    return (
      <div className='inline-flex items-center'>
        {labelPosition === 'left' && (
          <label className='pr-3 cursor-pointer' htmlFor={id}>
            {label}
          </label>
        )}

        <input
          autoComplete=''
          key={id}
          type={type}
          id={id}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={`w-full pl-2 pr-3 py-2 rounded-sm border-2
            border-gray-200 outline-none focus:border-${primaryColor}-300 ${css}`}
        />

        {labelPosition === 'right' && (
          <label className='pl-3 cursor-pointer' htmlFor={id}>
            {label}
          </label>
        )}
      </div>
    );
  }
}
