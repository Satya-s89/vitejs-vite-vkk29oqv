import './App.css';
import Usercard from './components/usercard.jsx';

function App() {
  const cards = Array.from({ length: 1 });
  const gridStyle = {
    display: 'center'
  };

  return (
    <div style={gridStyle}>
      {cards.map((_, index) => (
        <Usercard key={index} />
      ))}
    </div>
  );
}

export default App;
