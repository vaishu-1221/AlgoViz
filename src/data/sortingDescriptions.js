export const sortingDescriptions = {
  bubble: {
    title: "Bubble Sort",
    description:
      "Bubble Sort is a simple comparison-based sorting algorithm that repeatedly swaps adjacent elements if they are in the wrong order.",
    steps: [
      "Start from the first element",
      "Compare adjacent elements",
      "Swap if they are in the wrong order",
      "Repeat the process until the array is sorted",
    ],
    complexity: {
      time: "Best: O(n), Average: O(n²), Worst: O(n²)",
      space: "O(1)",
    },
    useCases: [
      "Educational purposes",
      "Small datasets",
      "Detecting if an array is already sorted",
    ],
  },

  selection: {
    title: "Selection Sort",
    description:
      "Selection Sort repeatedly selects the minimum element from the unsorted part and places it at the beginning.",
    steps: [
      "Divide array into sorted and unsorted parts",
      "Find the minimum element in the unsorted part",
      "Swap it with the first unsorted element",
      "Move the boundary of sorted part forward",
    ],
    complexity: {
      time: "Best: O(n²), Average: O(n²), Worst: O(n²)",
      space: "O(1)",
    },
    useCases: [
      "When memory writes are costly",
      "Small datasets",
      "Simple implementation requirement",
    ],
  },

  insertion: {
    title: "Insertion Sort",
    description:
      "Insertion Sort builds the sorted array one element at a time by inserting elements into their correct position.",
    steps: [
      "Start from the second element",
      "Compare it with elements before it",
      "Shift larger elements to the right",
      "Insert the element at the correct position",
    ],
    complexity: {
      time: "Best: O(n), Average: O(n²), Worst: O(n²)",
      space: "O(1)",
    },
    useCases: [
      "Nearly sorted arrays",
      "Small datasets",
      "Online sorting",
    ],
  },

  merge: {
    title: "Merge Sort",
    description:
      "Merge Sort is a divide-and-conquer algorithm that splits the array into halves, sorts them, and merges them back.",
    steps: [
      "Divide the array into two halves",
      "Recursively sort both halves",
      "Merge the sorted halves",
    ],
    complexity: {
      time: "Best: O(n log n), Average: O(n log n), Worst: O(n log n)",
      space: "O(n)",
    },
    useCases: [
      "Large datasets",
      "Stable sorting requirement",
      "External sorting",
    ],
  },

  quick: {
    title: "Quick Sort",
    description:
      "Quick Sort selects a pivot element and partitions the array around the pivot.",
    steps: [
      "Choose a pivot element",
      "Partition elements smaller and larger than pivot",
      "Recursively sort subarrays",
    ],
    complexity: {
      time: "Best: O(n log n), Average: O(n log n), Worst: O(n²)",
      space: "O(log n)",
    },
    useCases: [
      "Large datasets",
      "In-place sorting",
      "Performance-critical systems",
    ],
  },
};
