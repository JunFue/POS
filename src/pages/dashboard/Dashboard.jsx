import "../page-styles/PageStyles.css";
import { Nav } from "../../shared-components/Nav";

export function Dashboard() {
  return (
    <div className="window-container">
      <Nav />
      <div className="contents-container">DASHBOARD CONTENTS HERE</div>
    </div>
  );
}
