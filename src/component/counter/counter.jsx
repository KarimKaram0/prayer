import { useState, useEffect } from "react";
import soundEffect from "../soundEffect/pop.mp3";
import "../counter/counter.css"; // تأكد تضيف الاستايل

export default function Counter() {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const audio = new Audio(soundEffect);

  useEffect(() => {
    if (target !== "" && count === Number(target)) {
      audio.play();
      setIsDisabled(true);
    }
  }, [count, target]);

  return (
    <div className="counter-container">
      <p className="counter-display">{count}</p>
      <input
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        type="text"
        className="counter-input"
        placeholder="Enter target number"
      />
      <div>
        <button
          onClick={() => setCount(count + 1)}
          disabled={isDisabled}
          className="btn btn-primary btn-counter"
        >
          +
        </button>
        <button
          onClick={() => {
            setCount(0);
            setIsDisabled(false);
          }}
          className="btn btn-danger btn-counter"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
