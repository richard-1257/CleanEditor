import { createContext } from 'react';
import { IContext } from './model';

export const context = createContext<IContext>(null as any)