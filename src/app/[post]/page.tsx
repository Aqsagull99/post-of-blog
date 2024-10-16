"use client"; 
import { useState } from 'react';
import { motion } from 'framer-motion';

interface Post {
  title: string;
  content: string;
}

// Sample posts data
const posts: { [key: number]: Post } = {
  1: { title: 'First Blog Post', content: 'This is the content of the first post.' },
  2: { title: 'Second Blog Post', content: 'This is the content of the second post.' },
  3: { title: 'Third Blog Post', content: 'This is the content of the third post.' },
  4: { title: 'Fourth Blog Post', content: 'This is the content of the fourth post.' },
  5: { title: 'Five Blog Post', content: 'This is the content of the Fivth post.' },
  6: { title: 'Six Blog Post', content: 'This is the content of the Six post.' },
  7: { title: 'Seven Blog Post', content: 'This is the content of the Seven post.' },
  8: { title: 'Eight Blog Post', content: 'This is the content of the Eight post.' },
  9: { title: 'Nine Blog Post', content: 'This is the content of the Nine post.' },
  10: { title: 'Ten Blog Post', content: 'This is the content of the Ten post.' },

};

const PostDetail = ({ params }: { params: { post: string } }) => {
  const postId = parseInt(params.post, 10); 

  // Check if the post exists
  const post = posts[postId];

  // State for comments
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState<string>('');

  // Handle comment submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment) {
      setComments([...comments, comment]);
      setComment(''); 
    }
  };

  if (!post) {
    return <div className="text-center text-red-600 font-bold">The post is not found. It will appear after the 10th blog post.</div>; // If the post doesn't exist
  }

  return (
    <div 
      className="flex justify-center items-center min-h-screen w-full bg-center bg-no-repeat bg-cover bg-[url('/bg.png')] text-white py-8 px-5"
    >
      <div 
        className="max-w-4xl w-full backdrop-blur-glass shadow-comment-card rounded-xl p-8"
      >
        <div className="overflow-hidden">
        <motion.h1 
        initial={{x:"-100%"}}
        animate={{x:"0"}}
        transition={{duration:1, delay: 0.1, ease:[0.37, 0, 0.63, 1]}}
        className="text-4xl font-bold mb-4 -translate-x-0 duration-1000">
          {post.title}
        </motion.h1>
        </div>
        <motion.p 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration:1, delay:0.2}}
          className="text-lg mb-6 text-white/70"
        >
          {post.content}
        </motion.p>
        <div className="overflow-hidden">
        <motion.h2
        initial={{y:"120%"}}
        animate={{y:"0%"}}
        transition={{duration:0.5, delay: 0.4}}
         className="text-2xl font-semibold mb-2 opacity-80">Comments</motion.h2>
        </div>
        <form onSubmit={handleCommentSubmit} className="mb-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            required
            className="w-full h-24 p-2 border border-gray-300 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-black resize-none"
          />
          <button
            type="submit"
            className="mt-2 px-6 py-2 bg-white/80 text-black rounded-md hover:bg-white/60 transition"
          >
            Submit
          </button>
        </form>

        <h3 className="text-xl font-semibold mb-2 opacity-80">All Comments:</h3>
        <ul className="list-disc pl-5">
          {comments.map((c, index) => (
            <li 
              key={index} 
              className="mb-1 opacity-80"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostDetail;