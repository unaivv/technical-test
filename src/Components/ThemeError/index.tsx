import React, { createContext, useContext, useState } from 'react';
import styles from './styles.module.css';
import { ThemeContextProps } from './types';

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        const storedTheme = localStorage.getItem('theme');
        return (storedTheme as 'light' | 'dark') ?? 'light';
    })

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`${styles.theme} ${styles[theme]}`}>
                <button className={styles.toggleThemeButton} onClick={toggleTheme}>
                    Toggle theme
                </button>
                <div>
                    {children}
                </div>
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
