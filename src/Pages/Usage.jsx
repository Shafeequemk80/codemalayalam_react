import { useEffect, useState } from "react";

function Usage() {
  const [counter, Setcounter] = useState(0);
  const [color, Setcolor] = useState("white");

  useEffect(() => {
    console.log("useEffect 1", counter );
    return () => {
      console.log("CleanUp 1", counter);
    };
  }, []);
  useEffect(() => {
    console.log("useEffect 2", counter);
    return () => {
      console.log("CleanUp 2", counter);
    };
  }, []);
  useEffect(() => {
    console.log("useEffect 3", counter);
    return () => {
      console.log("CleanUp 3", counter);
    };
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          Setcounter((s) => {
            return s - 1;
          });
        }}
      >
        -
      </button>
      <label htmlFor=""> {counter}</label>
      <button
        onClick={() => {
          Setcounter((s) => {
            return s + 1;
          });
        }}
      >
        +
      </button>

      <div
        style={{ backgroundColor: color, height: "100px", width: "200px" }}
      ></div>
      <button
        onClick={() => {
          Setcolor((s) => {
            return "green";
          });
        }}
      >
        green
      </button>
      <button
        onClick={() => {
          Setcolor((s) => {
            return "red";
          });
        }}
      >
        red
      </button>
    </div>
  );
}
export default Usage;
