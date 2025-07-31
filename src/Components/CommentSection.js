export default function CommentSection() {
  return (
    <div style={{ marginTop: "2.5rem" }}>
      <h3 style={{ fontSize: "1.125rem", fontWeight: "600" }}>Comments</h3>
      <div style={{ marginTop: "0.5rem", color: "#374151" }}>
        No comments yet. (UI only)
      </div>
      <form style={{ marginTop: "1rem" }}>
        <textarea
          placeholder="Leave a comment..."
          rows="4"
          disabled
          style={{
            width: "100%",
            padding: "0.5rem",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
            resize: "vertical",
            fontFamily: "inherit",
            fontSize: "1rem",
          }}
        />
        <button
          type="submit"
          disabled
          style={{
            marginTop: "0.5rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#d1d5db",
            borderRadius: "0.375rem",
            color: "#4b5563",
            cursor: "not-allowed",
            border: "none",
            fontWeight: "500",
          }}
        >
          Submit (Disabled)
        </button>
      </form>
    </div>
  );
}
