import { useState } from "react";
import { bubbleSort } from "../Algorithm/SortingAlgo/BubbleSort";
import { InsertionSort } from "../Algorithm/SortingAlgo/InsertionSort";
import { SelectionSort } from "../Algorithm/SortingAlgo/SelectionSort";
// import { MergeSort } from "../Algorithm/SortingAlgo/MergeSort";
// import { QuickSort } from "../Algorithm/SortingAlgo/QuickSort";
import SortingVisualizer from "../Components/SortingVisualizer";
import { useNavigate } from "react-router-dom";

const mapAlgo = {
  bubble: { name: "Bubble Sort", fn: bubbleSort },
  insertion: { name: "Insertion Sort", fn: InsertionSort },
  selection: { name: "Selection Sort", fn: SelectionSort },
  // merge: { name: "Merge Sort", fn: MergeSort },
  // quick: { name: "Quick Sort", fn: QuickSort },
};

const Sorting = () => {
  const [algo, setAlgo] = useState("bubble");
  const navigate=useNavigate();

  return (
    <div className="min-h-screen bg-background text-text p-6">
      <div className="flex gap-2 items-center ">

        <select
          value={algo}
          onChange={(e) => setAlgo(e.target.value)}
          className="p-2 bg-bar text-white rounded cursor-pointer"
        >
          {Object.entries(mapAlgo).map(([key, algo]) => (
            <option key={key} value={key}>
              {algo.name}
            </option>
          ))}
        </select>
        <button
        onClick={() => navigate(`/detail/sorting/${algo}`)}
        className="px-4 py-2 bg-primary text-white rounded-lg shadow hover:opacity-90 transition bg-bar ml-auto"
      >
  View Description
</button>

      </div>

      <SortingVisualizer algorithm={mapAlgo[algo].fn} />
    </div>
  );
};

export default Sorting;
