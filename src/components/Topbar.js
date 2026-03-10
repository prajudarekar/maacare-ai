export default function Topbar() {
  return (
    <div className="topbar">
      <input
        type="text"
        placeholder="What do you need help with today?"
        className="search-input"
      />
      <div className="profile">
        <span>🔔</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
        />
        <span>Priya</span>
      </div>
    </div>
  );
}
