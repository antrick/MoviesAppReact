import React from 'react'
import { createContext, useState } from "react";

interface ImageColors{
    primary: string;
    secondary: string;
}

interface ContextProps{
    colors: ImageColors;
    prevColors: ImageColors;
    setMainColors: ( colors : ImageColors) => void;
    setMainPrevColors: ( colors : ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({children}: any) => {

    const [colors, setColors] = useState<ImageColors>({
        primary: 'red',
        secondary: 'blue'
    })

    const [prevColors, setPrevColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    })

    const setMainColors = ( colors : ImageColors) =>{
        setColors(colors);
    }
    const setMainPrevColors = ( prevColors : ImageColors) =>{
        setPrevColors(prevColors);
    }

    return(
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setMainPrevColors
        }}>
            {children}
        </GradientContext.Provider>
    )
}