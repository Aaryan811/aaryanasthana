import React from "react";

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: number;
}

/**
 * Add posts here when you're ready to publish.
 * Each post should have a corresponding markdown or TSX file
 * you can link to via the slug.
 *
 * Example:
 * {
 *   slug: "llm-evals-in-practice",
 *   title: "LLM Evals in Practice: What I Learned at Tempus",
 *   date: "2026-05-01",
 *   excerpt: "A brief intro to what the post is about...",
 *   readingTime: 6,
 * }
 */
const posts: Post[] = [];

const Blog: React.FC = () => {
  return (
    <div className="section-wrapper" id="writing">
      <span className="section-label">writing</span>
      {posts.length === 0 ? (
        <p className="blog-empty">no posts yet — check back soon.</p>
      ) : (
        posts.map((post) => (
          <article className="blog-card" key={post.slug}>
            <span className="blog-card-title">{post.title}</span>
            <span className="blog-card-meta">
              {post.date} &nbsp;·&nbsp; {post.readingTime} min read
            </span>
            <p className="blog-card-excerpt">{post.excerpt}</p>
          </article>
        ))
      )}
    </div>
  );
};

export default Blog;
