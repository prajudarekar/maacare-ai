export default function DashboardCards() {
  return (
    <div className="dashboard">
      <h5>Hello, Priya! 👋</h5>

      <div className="card-grid">
        <div className="info-card">
          <h6>Week 14</h6>
          <p>2nd Trimester</p>
        </div>

        <div className="action-card">
          <h6>Ask MaaCare AI</h6>
          <p>Chat with our AI assistant</p>
        </div>

        <div className="action-card">
          <h6>Food Guide</h6>
          <p>What’s safe to eat</p>
        </div>

        <div className="action-card">
          <h6>Tips & Reminders</h6>
          <p>Daily pregnancy tips</p>
        </div>
      </div>
    </div>
  );
}
