import "../page-styles/PageStyles.css";
import "./Inventory.css";
import { Nav } from "../../shared-components/Nav";
import { ItemRegTable } from "../../shared-components/tables/inventory-tables/ItemRegTable.Jsx";

export function Inventory({ itemRegTable, setItemRegTable }) {
  return (
    <div className="window-container">
      <Nav />
      <div className="contents-container">
        <ItemRegTable
          itemRegTable={itemRegTable}
          setItemRegTable={setItemRegTable}
        />
      </div>
    </div>
  );
}
