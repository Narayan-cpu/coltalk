"use client";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function PostForm({ onNewPost }: { onNewPost: () => void }) {
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content.trim()) {
      alert("Post content cannot be empty.");
      return;
    }
    await axios.post("/api/posts", { content, authorId: "123" });
    setContent("");
    onNewPost(); // Trigger post refresh
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-6 border rounded-xl shadow-lg bg-gray-900 mb-6 glow-card"
    >
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none placeholder-gray-500 text-white bg-gray-800"
        placeholder="What's on your mind?"
        rows={4}
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 mt-4 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all glow-button"
      >
        Post
      </motion.button>
    </motion.form>
  );
}
