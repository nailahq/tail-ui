import React, { Component } from 'react';
import { ITailUiTheme, TailUiContext } from '../Context';

export default class GrowLoader extends Component {
  static contextType: React.Context<ITailUiTheme> | undefined = TailUiContext;
  render() {
    const { primaryColor } = this.context;
    return (
      <div className='flex items-center justify-center space-x-5'>
        <div
          className='m-5 animate-spin inline-block w-12 h-12 border-1  rounded-full'
          role='status'
        >
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-${primaryColor}-600 opacity-75`}
          ></span>
        </div>
      </div>
    );
  }
}
