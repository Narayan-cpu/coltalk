"use client";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function PostForm({ onNewPost }: { onNewPost: () => void }) {
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      className="p-6 border rounded-lg shadow-sm bg-white mb-6"
    >
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        placeholder="What's happening?"
        rows={4}
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-md hover:bg-blue-600 transition-colors"
      >
        Post
      </motion.button>
    </motion.form>
  );
}
