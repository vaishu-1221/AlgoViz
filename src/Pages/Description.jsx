import { useParams } from "react-router-dom";
import { sortingDescriptions } from "../data/sortingDescriptions";
import { graphDescriptions } from "../data/graphDescription";

const Description = () => {
  const { type, algo } = useParams();

  const data =
    type === "sorting"
      ? sortingDescriptions[algo]
      : graphDescriptions[algo];

  if (!data) {
    return <div className="p-6">Description not found</div>;
  }

  return (
  <div className="min-h-screen bg-background text-gray-900 px-6 py-10">
    {/* Header */}
    <div className="max-w-4xl mx-auto mb-10">
      <h1 className="text-4xl font-extrabold text-primary mb-3 text-white">
        {data.title}
      </h1>
      <p className="text-lg text-white-600 leading-relaxed text-white">
        {data.description}
      </p>
    </div>

    <div className="max-w-4xl mx-auto grid gap-8">
      {/* How it Works */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          How it works
        </h2>
        <ul className="list-decimal ml-6 space-y-2 text-gray-900">
          {data.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>
      </div>

      {/* Complexity */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          Complexity Analysis
        </h2>

        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1 bg-blue-50 rounded-xl p-4">
            <p className="font-medium text-blue-700">Time Complexity</p>
            <p className="text-xl font-bold">{data.complexity.time}</p>
          </div>

          <div className="flex-1 bg-green-50 rounded-xl p-4">
            <p className="font-medium text-green-700">Space Complexity</p>
            <p className="text-xl font-bold">{data.complexity.space}</p>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        Use Cases
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {data.useCases.map((use, i) => (
            <li key={i}>{use}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
}

export default Description;
