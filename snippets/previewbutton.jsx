export const PreviewButton = ({ children, href }) => {
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState("Tab 1");

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "inline-block" }}>
      <div style={{ marginBottom: 8 }}>
        <button
          onClick={() => setActiveTab("Tab 1")}
          style={{
            padding: "4px 12px",
            borderRadius: "8px 0 0 8px",
            border: "1px solid #ccc",
            background: activeTab === "Tab 1" ? "#eee" : "#fff",
            fontWeight: activeTab === "Tab 1" ? "bold" : "normal",
            cursor: "pointer",
          }}
        >
          Tab 1
        </button>
        <button
          onClick={() => setActiveTab("Tab 2")}
          style={{
            padding: "4px 12px",
            borderRadius: "0 8px 8px 0",
            border: "1px solid #ccc",
            borderLeft: "none",
            background: activeTab === "Tab 2" ? "#eee" : "#fff",
            fontWeight: activeTab === "Tab 2" ? "bold" : "normal",
            cursor: "pointer",
          }}
        >
          Tab 2
        </button>
      </div>
      <a
        href={href}
        className="text-sm font-medium text-white dark:!text-zinc-950 bg-zinc-900 hover:bg-zinc-700 dark:bg-zinc-100 hover:dark:bg-zinc-300 rounded-full px-3.5 py-1.5 not-prose"
      >
        {children} <span style={{ marginLeft: 8 }}>Counter: {count}</span>
        <span style={{ marginLeft: 16, fontStyle: "italic" }}>
          Active Tab: {activeTab}
        </span>
      </a>
    </div>
  );
};
