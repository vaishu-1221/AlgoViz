import { useState } from "react";
import GraphVisualizer from "../Components/GraphVisualizer";
import { bfs } from "../Algorithm/GraphAlgo/bfs";
import { dfs } from "../Algorithm/GraphAlgo/dfs"; 
import { useNavigate } from "react-router-dom";

const mapAlgo = {
  bfs: { name: "Breadth-First Search", fn: bfs },
  dfs: { name: "Depth-First Search", fn: dfs },
};

const GraphPage = () => {
  const [algo, setAlgo] = useState("bfs");
  const navigate=useNavigate();

  return (
    <div className="min-h-screen bg-background text-text p-6 ">
      <div className="flex gap-2 items-center mb-4">

        <select
          value={algo}
          onChange={(e) => setAlgo(e.target.value)}
          className="p-2 bg-bar rounded cursor-pointer text-white"
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

      <GraphVisualizer algorithm={mapAlgo[algo].fn} />
    </div>
  );
};

export default GraphPage;
