import React from 'react';
import './index.scss';

function App() {
  //let count = 0;
  const [count, setCount] = React.useState(0);


  const onclickPlus = () => {
    setCount(count + 1);
  };

  const onclickMinus = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onclickMinus} className="minus">- Минус</button>
        <button onClick={onclickPlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
