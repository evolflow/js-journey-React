function Buttons({ setCount, count }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => {
        if (count > 0) setCount(count - 1);
      }}>
        -
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Buttons;
