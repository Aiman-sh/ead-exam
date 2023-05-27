import { useEffect, useState } from "react";
export default function Timer() {
  const [timer, setTimer] = useState(10);
  var id;
  function tick() {
    if (timer == 0) {
      console.log(id);

      clearInterval(id);
      alert("Time's Up!");
    } else {
      setTimer((prevState) => prevState - 1);
    }
  }

  useEffect(() => {
    id = setInterval(() => {
      tick();
    }, 1000);
  }, []);

  return (
    <>
      <p>Timer</p>
      <span>{timer}</span>
    </>
  );
}
