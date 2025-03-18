"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import PostForm from "@/components/PostForm";
import { motion, AnimatePresence } from "framer-motion";
export default function HomePage() {
  const [posts, setPosts] = useState<
    { id: number; content: string; createdAt: string }[]
  >([]);

  // Fetch posts from the API
  const fetchPosts = async () => {
    const res = await axios.get("/api/posts");
    setPosts(res.data);
  };

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  // Refresh posts after a new post is submitted
  const handleNewPost = () => {
    fetchPosts();
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-black min-h-screen">
      <PostForm onNewPost={handleNewPost} />
      <h1 className="text-3xl font-bold mb-6 text-white text-center mt-6 glow-text">
        Trending Topics
      </h1>
      <AnimatePresence>
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="border p-6 my-4 rounded-xl shadow-lg bg-gray-900 hover:shadow-xl transition-shadow glow-card"
          >
            <p className="text-white text-lg">{post.content}</p>
            <span className="text-sm text-gray-400 mt-2 block">
              {new Date(post.createdAt).toLocaleString()}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
