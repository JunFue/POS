import "../../Styles.css";
import { Nav } from "../../shared-components/navigations/Nav";
import { ItemReg } from "./ItemReg";

export function Inventory({ itemRegTable, setItemRegTable }) {
  return (
    <>
      <div className="p-2 flex flex-col flex-grow gap-0.5 bg-gray-300 rounded-2xl shadow-inner transition-all min-h-0 overflow-hidden">
        <Nav className="" />
        <ItemReg
          itemRegTable={itemRegTable}
          setItemRegTable={setItemRegTable}
        />
      </div>
    </>
  );
}
