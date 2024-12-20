export interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
}

export interface ThemeProviderProps {
    children: React.ReactNode | React.ReactNode[];
}
