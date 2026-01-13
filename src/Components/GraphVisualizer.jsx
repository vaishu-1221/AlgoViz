import { useEffect, useRef, useState } from "react";

const GraphVisualizer = ({ algorithm }) => {
  const containerRef = useRef(null);

  const [size, setSize] = useState({ width: 800, height: 500 });


  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;
      setSize({ width, height: Math.min(500, width * 0.6) });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // nodes defined in relative (%) positions
  const nodes = [
    { x: 0.15, y: 0.25 },
    { x: 0.45, y: 0.25 },
    { x: 0.75, y: 0.25 },
    { x: 0.3, y: 0.65 },
    { x: 0.6, y: 0.65 },
  ];

  const edges = [
    [0, 1],
    [1, 2],
    [0, 3],
    [3, 4],
    [4, 2],
  ];

  const [activeNodes, setActiveNodes] = useState([]);
  const [traversedEdges, setTraversedEdges] = useState([]);
  const [outputArray, setOutputArray] = useState([]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const startAlgorithm = async (start = 0) => {
    setActiveNodes([]);
    setTraversedEdges([]);
    setOutputArray([]);

    const animations = algorithm(nodes.length, edges, start);
    const visited = [];

    for (const step of animations) {
      if (step.activeNodes) {
        visited.push(...step.activeNodes);
        setActiveNodes(step.activeNodes);
        setOutputArray([...visited]);
      }

      if (step.activeEdges) {
        setTraversedEdges((prev) => [...prev, ...step.activeEdges]);
      }

      await delay(700);
    }

    setActiveNodes([]);
  };

  return (
    <div ref={containerRef} className="w-full max-w-3xl mx-auto">
      <svg
        viewBox={`0 0 ${size.width} ${size.height}`}
        className="w-full h-auto border rounded"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Edges */}
        {edges.map(([u, v], i) => {
          const x1 = nodes[u].x * size.width;
          const y1 = nodes[u].y * size.height;
          const x2 = nodes[v].x * size.width;
          const y2 = nodes[v].y * size.height;

          const traversed = traversedEdges.some(
            ([a, b]) =>
              (a === u && b === v) || (a === v && b === u)
          );

          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={traversed ? "green" : "white"}
              strokeWidth={3}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, idx) => {
          const cx = node.x * size.width;
          const cy = node.y * size.height;
          const active = activeNodes.includes(idx);

          return (
            <g key={idx}>
              <circle
                cx={cx}
                cy={cy}
                r={22}
                fill={active ? "red" : "#1E5AA8"}
              />
              <text
                x={cx}
                y={cy + 5}
                textAnchor="middle"
                fontSize="14"
                fill="white"
                fontWeight="bold"
              >
                {idx}
              </text>
            </g>
          );
        })}
      </svg>

      <button
        onClick={() => startAlgorithm(0)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Start Algorithm
      </button>

      {outputArray.length > 0 && (
        <div className="mt-4 p-2 bg-background rounded  text-center">
          <strong className="text-sorted">Traversal:</strong> {outputArray.join(" → ")}
        </div>
      )}
    </div>
  );
};

export default GraphVisualizer;
