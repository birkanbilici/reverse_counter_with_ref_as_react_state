import logo from './logo.svg';
import './App.css';
import { useCanvasCounter } from './useCanvasCounter';
import { useEffect, useState } from 'react';
function App() {
    const [isRestart, setIsRestart] = useState(false);
    const options1 = {
        canvasWidth: 100,
        canvasHeight: 100,
        x: 50,
        y: 50,
        radius: 40,
        lineWidth: 5,
        isRestart,
        COUNT: 3000, //ms
        fillColor: 'yellow',
        strokeColor: {
            hue: '255',
            sat: '100%',
            light: '40%',
        },
        textColor: 'hsl(255, 20%, 65%)',
        canvasName: 'opt1',
    };
    const options2 = {
        canvasWidth: 100,
        canvasHeight: 100,
        x: 50,
        y: 50,
        radius: 40,
        lineWidth: 5,
        isRestart,
        COUNT: 2000, //ms
        fillColor: 'yellow',
        strokeColor: {
            hue: '120',
            sat: '100%',
            light: '40%',
        },
        textColor: 'hsl(120, 40%, 65%)',
        canvasName: 'opt2',
    };
    const options3 = {
        canvasWidth: 100,
        canvasHeight: 100,
        x: 50,
        y: 50,
        radius: 40,
        lineWidth: 5,
        isRestart,
        COUNT: 1000, //ms
        fillColor: 'yellow',
        strokeColor: {
            hue: '200',
            sat: '100%',
            light: '40%',
        },
        textColor: 'hsl(200, 20%, 65%)',
        canvasName: 'opt3',
    };
    const canvasCounter = useCanvasCounter(options1);
    const canvasCounter2 = useCanvasCounter(options2);
    const canvasCounter3 = useCanvasCounter(options3);
    const handleRestart = () => {
        setIsRestart(!isRestart);
    };
    return (
        <>
            <div style={{ height: '120px' }}>{canvasCounter}</div>
            <div style={{ height: '120px' }}>{canvasCounter2}</div>
            <div style={{ height: '120px' }}>{canvasCounter3}</div>
            <div>
                <button onClick={handleRestart}>{isRestart ? 'Reset Counter' : 'Restart Counter'}</button>
            </div>
        </>
    );
}

export default App;
