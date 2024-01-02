import { useEffect, useState } from "react";

export function useTypingEffect(textArray: string[], interKeyStrokeDurationInMs: number) {
    const [letterPosition, setLetterPosition] = useState(0);
    const [arrPosition, setArrPosition] = useState(0);

    const [displayText, setDisplayText] = useState("");

    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!paused) {
                setDisplayText(prev => prev + textArray[arrPosition][letterPosition]);

                setLetterPosition(prev => prev + 1);

                if (letterPosition === textArray[arrPosition].length - 1) {
                    setPaused(true);


                    if (arrPosition === textArray.length - 1) {
                        setTimeout(() => {
                            setPaused(false);
                            setLetterPosition(0);
                            setArrPosition(0);
                            setDisplayText("");
                        }, 2000);

                    } else {
                        setTimeout(() => {
                            setPaused(false);
                            setLetterPosition(0);
                            setArrPosition(prev => prev + 1);
                            setDisplayText("");
                        }, 2000);
                    }
                }
            }
        }, interKeyStrokeDurationInMs);

        return () => {
            clearInterval(intervalId);
        };
    }, [letterPosition, paused]);

    return displayText;
}
