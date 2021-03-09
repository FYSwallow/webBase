import React from 'react';

export interface Themes {
    light: ThemesInfo,
    dark: ThemesInfo
}
export interface ThemesInfo {
    foreground: string,
    background: string
}

export const themes: Themes = {
    light: {
        foreground: '#000',
        background: '#eee'
    },
    dark: {
        foreground: '#fff',
        background: '#222'
    }
}
export const MyContext = React.createContext(themes.dark)