import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid #e5e7eb",
        borderRadius: "0.5rem",
        marginBottom: "1rem",
        transition: "box-shadow 0.2s ease-in-out",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <Link href={`/posts/${post.slug}`}>
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: "700",
            color: "#16a34a", // Tailwind's green-600
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.textDecoration = "underline";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.textDecoration = "none";
          }}
        >
          {post.title}
        </h2>
      </Link>
      <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
        {post.date} | {post.author}
      </p>
      <p style={{ marginTop: "0.5rem", color: "#374151" }}>{post.excerpt}</p>
    </div>
  );
}
