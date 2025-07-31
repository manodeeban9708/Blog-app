import fs from "fs";
import path from "path";
import { useState } from "react";
import PostCard from "../Components/PostCard";
import SearchBar from "../Components/SearchBar";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return { props: { posts: data } };
}

export default function Home({ posts }) {
  const [query, setQuery] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.author.toLowerCase().includes(query.toLowerCase())
  );

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "98vw",
    height: "100vh",
    overflowY: "auto",
    boxSizing: "border-box",
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "1rem 3rem",
    backgroundColor: "#1e3a8a", // Tailwind blue-800
    color: "#ffffff",
    fontSize: "1.25rem",
    boxSizing: "border-box",
    position: "sticky",
    top: 0,
    zIndex: 10,
  };

  const titleStyle = {
    fontFamily: "monospace",
    textAlign: "center",
    flexShrink: 0,
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={titleStyle}>Welcome to the Blog</div>
        <SearchBar query={query} onChange={setQuery} />
      </div>

      <div style={{ width: "100%", padding: "1rem", boxSizing: "border-box" }}>
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
