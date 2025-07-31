import fs from "fs";
import path from "path";
import { useRouter } from "next/router";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import CommentSection from "../../Components/CommentSection";

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const posts = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const posts = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
}

export default function Post({ post }) {
  const router = useRouter();

  return (
    <div
      style={{
        maxWidth: "42rem", // Tailwind's max-w-2xl
        margin: "0 auto",
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      <button
        onClick={() => router.back()}
        style={{
          color: "#2563eb", // Tailwind's blue-600
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          textDecoration: "none",
          marginBottom: "1rem",
          fontSize: "1rem",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.textDecoration = "underline")
        }
        onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
      >
        ← Back to Home
      </button>

      <h1
        style={{
          fontSize: "1.875rem", // Tailwind's text-3xl
          fontWeight: "700",
          marginBottom: "0.5rem",
        }}
      >
        {post.title}
      </h1>

      <p
        style={{
          fontSize: "0.875rem", // text-sm
          color: "#6b7280", // text-gray-500
          marginBottom: "1.5rem",
        }}
      >
        {post.date} | {post.author}
      </p>

      <ReactMarkdown>{post.content}</ReactMarkdown>

      <CommentSection />
    </div>
  );
}
