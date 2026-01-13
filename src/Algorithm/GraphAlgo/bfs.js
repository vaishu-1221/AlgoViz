export const bfs = (n, edges, start) => {
  const adjList = Array.from({ length: n }, () => []);
  for (let [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u);
  }

  const visited = Array(n).fill(false);
  const queue = [start];
  visited[start] = true;

  const animations = [{ activeNodes: [start], activeEdges: [] }];

  while (queue.length > 0) {
    const node = queue.shift();
    for (let neighbor of adjList[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
        animations.push({
          activeNodes: [neighbor],
          activeEdges: [[node, neighbor]],
        });
      }
    }
  }

  return animations;
};
