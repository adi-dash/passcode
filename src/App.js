import { useState } from 'react';
import './App.css';

function CalcDisplay({ display }) {
  return <div className="calc-display">{display}</div>;
}

function CalcButton({ value, onClick }) {
  return (
    <button className="calc-button" onClick={onClick}>
      {value}
    </button>
  );
}

function App() {
  const [pin, setPin] = useState("1234567890");
  const [num, setNum] = useState(0);
  const [disp, setDisp] = useState("ENTER CODE");
  const [changePinState, setChangePinState] = useState(0);

  const handleNumberClick = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (num === 0) {
      setNum(value);
      setDisp(value);
    } else {
      setNum(num + value);
      setDisp(num + value);
    }
    console.log(num.length);
    console.log(`${num} | ${disp}`);
  };

  const handleEnterClick = () => {
    if (changePinState === 0) {
      if (num === pin) {
        setDisp("OPEN");
      } else {
        setDisp("LOCKED");
      }
    } else if (changePinState === 1) {
      if (num === pin) {
        setDisp("ENTER NEW CODE");
        setChangePinState(2);
      } else {
        setDisp("INVALID CODE");
      }
    } else if (changePinState === 2) {
      if (num.length >= 8) {
        setPin(num);
        setDisp("CHANGE CODE SUCCESSFUL");
        setNum(0);
        setChangePinState(0);
      } else {
        setDisp("CODE SHOULD BE 8 DIGITS");
        setNum(0);
      }
    }
    setNum(0);
    console.log(`${num} | ${disp}`);
  };

  const handleClearClick = () => {
    setNum(0);
    setDisp("ENTER CODE");
    console.log(`${num} | ${disp}`);
  };

  const handleNameClick = () => {
    setNum(0);
    setDisp("ADRIAN JHAN Y. ARCEGA");
  };

  const handleSubjClick = () => {
    setNum(0);
    setDisp("C-PEITEL3");
  };

  const handlePinClick = () => {
    setNum(0);
    setDisp("ENTER CURRENT CODE");
    setChangePinState(1);
    console.log(`${num} | ${disp}`);
  };

  return (
    <div className="calc-container">
      <CalcDisplay display={disp} />
      <div className="calc-buttons-container">
        <CalcButton value="7" onClick={handleNumberClick} />
        <CalcButton value="8" onClick={handleNumberClick} />
        <CalcButton value="9" onClick={handleNumberClick} />
        <CalcButton value="4" onClick={handleNumberClick} />
        <CalcButton value="5" onClick={handleNumberClick} />
        <CalcButton value="6" onClick={handleNumberClick} />
        <CalcButton value="1" onClick={handleNumberClick} />
        <CalcButton value="2" onClick={handleNumberClick} />
        <CalcButton value="3" onClick={handleNumberClick} />
        <CalcButton value="RESET" onClick={handleClearClick} />
        <CalcButton value="0" onClick={handleNumberClick} />
        <CalcButton value="ENTER" onClick={handleEnterClick} />
        <CalcButton value="NAME" onClick={handleNameClick} />
        <CalcButton value="SUBJ" onClick={handleSubjClick} />
        <CalcButton value="PIN" onClick={handlePinClick} />
      </div>
    </div>
  );
}

export default App;
