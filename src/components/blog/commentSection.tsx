"use client";

import React, { useState } from "react";

// Helper function to sanitize input
const sanitizeInput = (input: string): string => {
  const temp = document.createElement("div");
  temp.textContent = input;
  return temp.innerHTML;
};

// Validation helpers
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const CommentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState<string>("");
  const [comments, setComments] = useState<
    { id: number; name: string; comment: string; date: string; color: string }[]
  >([]);
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editingCommentText, setEditingCommentText] = useState("");

  const colors = ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-purple-500", "bg-yellow-500"];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate inputs
    if (!name.trim() || !email.trim() || !comment.trim()) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Sanitize inputs
    const sanitizedComment = sanitizeInput(comment);
    const sanitizedName = sanitizeInput(name);

    // Generate a random color for the user icon
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newComment = {
      id: Date.now(),
      name: sanitizedName,
      comment: sanitizedComment,
      date: new Date().toLocaleDateString(),
      color: randomColor,
    };

    // Update the comment list
    setComments([newComment, ...comments]);

    setMessage("Thanks for your comment!");
    setTimeout(() => {
      setMessage("");
    }, 3000);

    // Clear the form
    setName("");
    setEmail("");
    setComment("");
  };

  const handleEdit = (id: number) => {
    const commentToEdit = comments.find((c) => c.id === id);
    if (commentToEdit) {
      setEditingCommentId(id);
      setEditingCommentText(commentToEdit.comment);
    }
  };

  const handleDelete = (id: number) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();

    const sanitizedEditComment = sanitizeInput(editingCommentText);

    setComments(
      comments.map((c) =>
        c.id === editingCommentId ? { ...c, comment: sanitizedEditComment } : c
      )
    );
    setEditingCommentId(null);
    setEditingCommentText("");
  };

  return (
    <div className="py-10">
      {message && (
        <div className="fixed bottom-28 right-5 bg-orangeLike text-white px-4 py-2 rounded shadow-lg z-50">
          {message}
        </div>
      )}
      <h3 className="font-bold text-[24px] font-sans text-txtBlack">
        Post a comment
      </h3>
      <hr className="bg-outline w-full my-6" />
      <form className="text-txtBlack" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-5 mb-5">
          <div className="flex-1">
            <input
              placeholder="Name*"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-[56px] px-3 py-2 text-sm bg-transparent font-[500] text-[16px] border border-outline focus:outline-none focus:ring placeholder:text-txtGray focus:ring-orangeLike focus:border-orangeLike"
              required
            />
          </div>
          <div className="flex-1">
            <input
              placeholder="Email*"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[56px] px-3 py-2 text-sm bg-transparent font-[500] text-[16px] border border-outline focus:outline-none focus:ring placeholder:text-txtGray focus:ring-orangeLike focus:border-orangeLike"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <textarea
            placeholder="Write a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full h-[244px] px-3 py-2 text-[16px] font-[500] bg-transparent border border-outline resize-none placeholder:text-txtGray focus:outline-none focus:ring focus:ring-orangeLike focus:border-orangeLike"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-[14px] px-8 bg-orangeLike text-white text-sm font-medium hover:bg-orange-500 transition text-nowrap"
        >
          Post a comment
        </button>
      </form>

      <div className="mt-10">
        <h3 className="font-bold text-[24px] font-sans text-txtBlack">
          Comments - {comments.length}
        </h3>
        <hr className="bg-outline w-full my-6" />
        {comments.map((comment) => (
          <div key={comment.id} className="mb-6 flex gap-4 items-start">
            {/* User Icon */}
            <div
              className={`${comment.color} w-12 h-12 rounded-full flex items-center justify-center font-bold text-white`}
            >
              {comment.name[0].toUpperCase()}
            </div>

            <div className="flex-1">
              <p className="font-bold text-[18px]">{comment.name}</p>
              <p className="text-sm text-gray-500">{comment.date}</p>
              {editingCommentId === comment.id ? (
                <form onSubmit={handleUpdate}>
                  <textarea
                    value={editingCommentText}
                    onChange={(e) => setEditingCommentText(e.target.value)}
                    className="w-full h-[100px] px-3 py-2 text-[16px] font-[500] bg-transparent border border-outline resize-none placeholder:text-txtGray focus:outline-none focus:ring focus:ring-orangeLike focus:border-orangeLike"
                  ></textarea>
                  <div className="mt-2 flex gap-2">
                    <button
                      type="submit"
                      className="py-[8px] px-4 bg-orangeLike text-white text-sm font-medium hover:bg-orange-500 transition text-nowrap"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingCommentId(null)}
                      className="py-[8px] px-4 bg-gray-300 text-black text-sm font-medium hover:bg-gray-400 transition text-nowrap"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <p className="mt-2 max-w-[300px] break-words text-wrap">{comment.comment}</p>
              )}
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => handleEdit(comment.id)}
                  className="text-orangeLike hover:underline text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(comment.id)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentForm;

