import React, { useState } from 'react';

function App() {
    const [colors, setColors] = useState([
        { h: 0, s: 100, l: 50 },
        { h: 120, s: 100, l: 50 },
        { h: 240, s: 100, l: 50 },
    ]);

    const generateRandomColor = () => {
        const h = Math.random() * 360;
        const s = Math.random() * 100;
        const l = Math.random() * 100;
        return { h, s, l };
    };

    const addColor = () => {
        setColors([...colors, generateRandomColor()]);
    };

    return (
        <div className="app">
            <h1>Color Palette Generator</h1>
            <div className="palette">
                {colors.map((color, index) => (
                    <div key={index} className="color" style={{ backgroundColor: `hsl(${color.h}, ${color.s}%, ${color.l}%)` }}></div>
                ))}
            </div>
            <button onClick={addColor}>Add Random Color</button>
        </div>
    );
}

export default App;