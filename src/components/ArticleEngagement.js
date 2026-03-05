"use client";

import { useState } from "react";

export default function ArticleEngagement({ seedComments = [] }) {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(seedComments);

  const averageRating = comments.length
    ? (
        comments.reduce((sum, item) => sum + (item.rating || 0), 0) /
        comments.length
      ).toFixed(1)
    : "0.0";

  function submitComment(e) {
    e.preventDefault();
    if (!name.trim() || !commentText.trim()) return;

    setComments((prev) => [
      {
        name: name.trim(),
        text: commentText.trim(),
        rating: selectedRating || 4,
      },
      ...prev,
    ]);

    setName("");
    setCommentText("");
    setSelectedRating(0);
    setHoveredRating(0);
  }

  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-black">Comments and Reviews</h3>
      <p className="mt-2 text-sm font-semibold text-amber-600">
        {"★".repeat(Math.max(1, Math.round(Number(averageRating))))}{" "}
        <span className="text-slate-600">
          ({averageRating}/5 from {comments.length} reviews)
        </span>
      </p>

      <div className="mt-5">
        <p className="text-sm font-semibold text-slate-800">Rate this article:</p>
        <div className="mt-2 flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              onClick={() => setSelectedRating(star)}
              className={`text-3xl leading-none transition ${
                star <= (hoveredRating || selectedRating)
                  ? "scale-110 text-amber-400"
                  : "text-slate-300 hover:text-amber-300"
              }`}
              aria-label={`Rate ${star} star`}
            >
              ★
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Click a star to rate. Hover and click both are active.
        </p>
      </div>

      <form
        onSubmit={submitComment}
        className="mt-6 space-y-3 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm outline-none transition focus:-translate-y-0.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-400/50"
        />
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write your comment..."
          rows={4}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm outline-none transition focus:-translate-y-0.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-400/50"
        />
        <button
          type="submit"
          className="rounded-xl bg-gradient-to-r from-slate-900 to-blue-800 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:brightness-110"
        >
          Post Comment
        </button>
      </form>

      <div className="mt-6 space-y-3">
        {comments.map((item, index) => (
          <article
            key={`${item.name}-${index}`}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4"
          >
            <div className="flex items-center justify-between">
              <p className="font-bold text-slate-900">{item.name}</p>
              <p className="text-xs text-amber-600">{"★".repeat(item.rating)}</p>
            </div>
            <p className="mt-2 text-sm text-slate-700">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
