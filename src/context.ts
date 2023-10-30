import { createContext } from 'react';
import { IContext } from './model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const context = createContext<IContext>(null as any)