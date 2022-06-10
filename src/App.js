import "./app.css";

function App() {
  return (
    <div className="calculator-frame">
      <div className="output-window">
        <div className="previous-entry">234,234</div>
        <div className="current-entry">224,243,223,673</div>
      </div>
      <button className="two-col">AC</button>
      <button>DEL</button>
      <button>/</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="two-col">=</button>
    </div>
  );
}

export default App;
