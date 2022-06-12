import './App.css';
import ColorBoxContainer from './ColorBoxContainer';

function App() {
  var colors = [];
  while (colors.length < 100) {
      do {
          var color = Math.floor((Math.random()*1000000)+1);
      } while (colors.indexOf(color) >= 0);
      colors.push("#" + ("000000" + color.toString(16)).slice(-6));
  }
  return (
    <div className="App">
      <ColorBoxContainer possibleColors={colors} />
    </div>
  );
}

export default App;
