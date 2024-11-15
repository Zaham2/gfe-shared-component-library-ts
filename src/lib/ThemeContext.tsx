import { createContext } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ThemeContext = createContext({ theme: 'dark', toggleTheme: (theme: string) => {} });
