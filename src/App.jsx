import ColorCard from './components/Colorcard.jsx';
import './App.css';

function App() {
    const colors = [
        { code: '#FF6663', name: 'Pink' },
        { code: '#333333', name: 'Gray' },
        { code: '#000000', name: 'Black' },
        { code: '#38BB14', name: 'Green' },
        { code: '#C90B0B', name: 'Red' },
        { code: '#FF8000', name: 'Orange' },
        { code: '#FFF500', name: 'Yellow' },
        { code: '#CCCCCC', name: 'Light Gray' },
        { code: '#7E41A2', name: 'Purple' },
        { code: '#C14911', name: 'Brown' },
    ];

    return (
        <div className="app">
            <div className="color-grid">
                {colors.map((color) => (
                    <ColorCard 
                        key={color.code} 
                        colorCode={color.code} 
                        colorName={color.name} 
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
