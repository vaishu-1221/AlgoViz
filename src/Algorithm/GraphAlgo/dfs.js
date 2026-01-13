export const dfs = (n, edges, start) => {
  // build adjacency list
  const adjList = Array.from({ length: n }, () => []);
  for (let [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u); // undirected graph
  }

  const visited = Array(n).fill(false);
  const animations = [];

  const dfsHelper = (node, parent = -1) => {
    visited[node] = true;

    // visit node
    animations.push({
      activeNodes: [node],
      activeEdges: parent === -1 ? [] : [[parent, node]],
    });

    for (let neighbor of adjList[node]) {
      if (!visited[neighbor]) {
        dfsHelper(neighbor, node);
      }
    }
  };

  dfsHelper(start);
  return animations;
};
