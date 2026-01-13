export const graphDescriptions = {
  bfs: {
    title: "Breadth First Search (BFS)",
    description:
      "BFS explores a graph level by level starting from a source node using a queue.",
    steps: [
      "Start from the source node",
      "Mark node as visited",
      "Push node into queue",
      "Visit all unvisited neighbors",
    ],
    complexity: {
      time: "O(V + E)",
      space: "O(V)",
    },
    useCases: [
      "Shortest path in unweighted graphs",
      "Social networks",
      "Broadcasting systems",
    ],
  },

  dfs: {
    title: "Depth First Search (DFS)",
    description:
      "DFS explores a graph by going as deep as possible before backtracking.",
    steps: [
      "Start from source node",
      "Visit unvisited neighbor recursively",
      "Backtrack when no neighbors left",
    ],
    complexity: {
      time: "O(V + E)",
      space: "O(V)",
    },
    useCases: [
      "Cycle detection",
      "Topological sorting",
      "Maze solving",
    ],
  },
};
