import React from 'react';
import { DefaultTheme } from './default-theme';

const TailUiContext = React.createContext(DefaultTheme);

export const TailUiProvider = TailUiContext.Provider;
export const TailUiConsumer = TailUiContext.Consumer;

export default TailUiContext;
