import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log(`hello useEffect : ${value}`);

    return (
      () => {
        console.log("곧 사라집니다.");
      },
      [value]
    );
  });

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
}

export default App;
