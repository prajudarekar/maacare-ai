import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCards from "../components/DashboardCards";
import ChatPanel from "../components/ChatPanel";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-layout">
      <Sidebar />
      <div className="main-area">
        <Topbar />
        <div className="content-area">
          <DashboardCards />
          <ChatPanel />
        </div>
      </div>
    </div>
  );
}
