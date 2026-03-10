import React from "react";
import "../styles/Header.css";
function Header(){
    return(
<div className="top-header">
  <div className="logo">
    <img src="/logo.png" alt="MaaCare AI" />
    <span>MaaCare AI</span>
  </div>

  <div className="lang-switch">
    <button className="active">English</button>
    <span>|</span>
    <button>मराठी</button>
  </div>
</div>

    )
}
export default Header;