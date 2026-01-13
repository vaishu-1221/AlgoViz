import { useEffect, useRef, useState } from "react";

const SortingVisualizer = ({ algorithm }) => {
  // generate random array
  const generateArray = () => {
    return Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 80) + 20
    );
  };

  const [array, setArray] = useState(generateArray());
  const [active, setActive] = useState([]);
  const [swap, setSwap] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [outputArray, setOutputArray] = useState([]);

  const isSortingRef = useRef(false);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const startSort = async () => {
    setSorted([]);
    setOutputArray([]);

    isSortingRef.current = true;
    const animations = algorithm(array);
    let arr = [...array];

    for (const step of animations) {
      if (!isSortingRef.current) {
        setActive([]);
        setSwap([]);
        return;
      }

      if (step.type === "compare") {
        setActive(step.indices);
      }

      if (step.type === "swap") {
        setSwap(step.indices);
        const [i, j] = step.indices;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
      }

      if (step.type === "insert") {
        arr[step.index] = step.value;
        setArray([...arr]);
      }

      if (step.type === "sorted") {
        setSorted((prev) => [...prev, step.indices[0]]);
      }

      await delay(200);
      setActive([]);
      setSwap([]);
    }

    isSortingRef.current = false;
    setSorted(Array.from({ length: arr.length }, (_, i) => i));
    setOutputArray([...arr]);
  };

  useEffect(() => {
    isSortingRef.current = false;
    setArray(generateArray());
    setSorted([]);
    setSwap([]);
    setActive([]);
    setOutputArray([]);
  }, [algorithm]);

  return (
    <>
      {/* Bars */}
      <div className="flex items-end gap-1 h-80 mt-10 border w-1/2">
        {array.map((val, idx) => {
          let color = "bg-[var(--color-bar)]";
          if (sorted.includes(idx)) color = "bg-[var(--color-sorted)]";
          else if (swap.includes(idx)) color = "bg-[var(--color-swap)]";
          else if (active.includes(idx)) color = "bg-[var(--color-compare)]";

          return (
            <div
              key={idx}
              className={`${color} w-5 transition-all text-black text-xs flex items-end justify-center`}
              style={{ height: `${val * 3}px` }}
            >
              {val}
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex">
        <button
          disabled={isSortingRef.current}
          onClick={startSort}
          className="mt-20 px-4 py-2 bg-blue-500 text-black rounded disabled:opacity-50"
        >
          Start Sorting
        </button>
      </div>

      {/* Sorted Output */}
      {outputArray.length > 0 && (
        <div className="mt-6 p-1  rounded bg-background text-white text-center ">
          <strong className="text-sorted">Sorted Array:</strong> {outputArray.join(" → ")}
        </div>
      )}
    </>
  );
};

export default SortingVisualizer;
