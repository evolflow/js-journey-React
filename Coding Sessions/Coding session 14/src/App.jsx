// 🔝 ІМПОРТИ (самий верх файлу)
import { useState } from "react";
import Counter from "./components/Counter.jsx";
import Buttons from "./components/Buttons.jsx";
// 🔽 КОМПОНЕНТ
function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>

      {/* 🔢 показ числа */}
      <Counter count={count} />

      {/* 🎮 кнопки */}
      <Buttons count={count} setCount={setCount} />
    </div>
  );
}

export default App;
