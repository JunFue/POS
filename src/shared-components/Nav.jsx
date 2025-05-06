import "./Nav.css";
import { Link } from "react-router";

export function Nav() {
  return (
    <div className="nav-container">
      <div>
        <Link to="/">DASHBOARD</Link>
      </div>
      <div>
        <Link to="/cashout">CASHOUT</Link>
      </div>
      <div>
        <Link to="/inventory">INVENTORY</Link>
      </div>
      <div>
        <Link to="/transactions">TRANSACTIONS</Link>
      </div>
    </div>
  );
}
