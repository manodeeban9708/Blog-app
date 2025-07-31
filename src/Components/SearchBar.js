export default function SearchBar({ query, onChange }) {
  return (
    <div style={{ marginLeft: "20px" }}>
      <input
        type="text"
        placeholder="Search by title or author"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: "1rem",
          border: "0",
          borderColor: "#e5e7eb",
          borderRadius: "1rem",
          fontSize: "1.125rem",
          color: "#000",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(4px)",
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          transition: "all 0.3s ease-in-out",
        }}
      />
    </div>
  );
}
