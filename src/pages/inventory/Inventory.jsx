import "../../Styles.css";
import { Nav } from "../../shared-components/navigations/Nav";
import { ItemRegTable } from "../../shared-components/tables/inventory-tables/ItemRegTable.Jsx";

export function Inventory({ itemRegTable, setItemRegTable }) {
  return (
    <>
      <div className="relative p-2 flex flex-col flex-grow gap-0.5 bg-gray-300 rounded-2xl shadow-inner transition-all min-h-0 overflow-hidden">
        <Nav className="absolute" />
        <div className="p-2 flex flex-grow min-h-0 overflow-auto rounded-lg">
          <ItemRegTable
            itemRegTable={itemRegTable}
            setItemRegTable={setItemRegTable}
          />
        </div>
      </div>
    </>
  );
}
