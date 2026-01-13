import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-text px-6 md:px-16">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center pt-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Visualize Algorithms <br />
          <span className="text-bar">Step by Step</span>
        </h1>

        <p className="mt-6 max-w-2xl text-gray-400 text-lg">
          Understand sorting and graph algorithms through interactive
          visualizations designed for deep learning and interview prep.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            to="/sorting"
            className="px-6 py-3 rounded-lg font-medium
            bg-bar text-black hover:opacity-90 transition"
          >
            Start Sorting
          </Link>

          <Link
            to="/graph"
            className="px-6 py-3 rounded-lg font-medium
            border border-bar text-bar
            hover:bg-bar hover:text-black transition"
          >
            Explore Graphs
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          title="Sorting Algorithms"
          desc="Bubble, Selection, Insertion, Merge, Quick and more with animations."
        />

        <FeatureCard
          title="Graph Algorithms"
          desc="Visualize BFS, DFS, shortest paths and traversal techniques."
        />

        <FeatureCard
          title="Learning Focused"
          desc="Perfect for DSA understanding, coding interviews, and practice."
        />
      </section>

      {/* FOOTER CTA */}
      <section className="mt-28 text-center pb-20">
        <h2 className="text-3xl font-semibold">
          Learn Algorithms the <span className="text-sorted">Smart Way</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Build intuition, not just code.
        </p>
      </section>
    </div>
  );
};

const FeatureCard = ({ title, desc }) => {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-bar transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
};

export default Home;
