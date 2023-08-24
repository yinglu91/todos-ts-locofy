import { FunctionComponent } from "react";
import "./Header.css";
const Header: FunctionComponent = () => {
  return (
    <div className="header">
      <div className="title-notes">
        <div className="to-do">To Do</div>
        <div className="user-feedback-tomorrow">User feedback tomorrow!</div>
      </div>
      <div className="emoji">
        <div className="div">🌤️</div>
      </div>
    </div>
  );
};

export default Header;
