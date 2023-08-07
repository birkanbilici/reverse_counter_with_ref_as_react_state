import { useEffect, useState, useRef } from 'react';

const DOUBLE_PI = 2 * Math.PI;

const useCanvasCounter = ({
    canvasWidth,
    canvasHeight,
    x,
    y,
    radius,
    lineWidth,
    isRestart,
    COUNT,
    fillColor,
    strokeColor,
    displayCounter,
    textColor,
    canvasName,
    displayInsideCircle,
}) => {
    const [counter, setCounter] = useState(COUNT);
    const [start, setStart] = useState(false);
    const curStateRef = useRef(counter);
    const canvasCircle = useRef(DOUBLE_PI);
    const timer = useRef(null);
    const setCounterState = (data) => {
        curStateRef.current = data;
        setCounter(data);
    };

    const listener = () => {
        if (curStateRef.current > 0) {
            setCounterState(curStateRef.current - 1);
        } else {
            clearInterval(timer.current);
        }
    };

    useEffect(() => {
        let canvas = document.getElementById(canvasName);
        const ctx = canvas.getContext('2d');       
        

        ctx.reset();
        ctx.beginPath();
        ctx.arc(x, y, radius + lineWidth / 2, 0, DOUBLE_PI);
        ctx.fillStyle = fillColor;
        if(displayInsideCircle){
            ctx.fill();
        }
        

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, canvasCircle.current);
        ctx.lineWidth = lineWidth;
        let hue = strokeColor.hue - (COUNT * 10) / counter;
        if (hue < 1) {
            hue = 0;
        }
        ctx.strokeStyle = `hsl(${hue}, ${strokeColor.sat}, ${strokeColor.light})`;
        ctx.stroke();

        ctx.font = '16px serif';

        ctx.globalApha = 0.3
        ctx.fillStyle = `hsl(${hue}, ${strokeColor.sat}, ${strokeColor.light})`;
        let translateX = 5;
        if (counter < 950) {
            translateX = 10;
        }
        ctx.fillText(
            `T-${(Math.round((counter / 100) * 100) / 100).toFixed()}`,
            x - radius + radius / 2 + translateX,
            y + 5,
        );

        if (start) {
            canvasCircle.current = canvasCircle.current - canvasCircle.current / curStateRef.current;
        }

        
    }, [counter]);

    useEffect(() => {
        if (start) {
            clearInterval(timer.current);
            timer.current = setInterval(listener, 10);
        }

        return () => {
            clearInterval(timer.current);
        };
    }, [start]);

    const handleRestart = () => {
        setCounterState(COUNT);
        canvasCircle.current = DOUBLE_PI;
        setStart(isRestart);
    };

    useEffect(() => {
        handleRestart();
    }, [isRestart]);

    return (
        <>
            {displayCounter && <div>{counter}</div>}
            <canvas id={canvasName} width={canvasWidth} height={canvasHeight}></canvas>
        </>
    );
};

export { useCanvasCounter };
