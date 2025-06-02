import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const App = () => {
  return (
    <div className="min-h-screen bg-pink-50 p-6 font-sans">
      <h1 className="text-4xl font-bold text-center text-rose-400 mb-8">📓 Pastel Café & Cinema Scrapbook</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Latte Love ☕",
            image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
            description: "A warm latte in a pastel cup at a cozy street café.",
          },
          {
            title: "Vintage Vibes 🎬",
            image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f",
            description: "Watching classics in a pastel-themed vintage cinema.",
          },
          {
            title: "Croissants & Conversations 🥐",
            image: "https://images.unsplash.com/photo-1523987355523-c7b5b879ec18",
            description: "Morning pastries with friends under fairy lights.",
          },
          {
            title: "Popcorn Moments 🍿",
            image: "https://images.unsplash.com/photo-1598899134739-24c46f58d54a",
            description: "Sharing popcorn and laughter at an indie movie night.",
          },
          {
            title: "Pastel Interiors 🪑",
            image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7",
            description: "The soft charm of pastel café interiors.",
          },
          {
            title: "Sunset Screening 🌇",
            image: "https://images.unsplash.com/photo-1603190287605-1d07c4c5012c",
            description: "Open-air movie scenes during a golden sunset.",
          },
        ].map((post, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-rose-600">{post.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{post.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default App;
