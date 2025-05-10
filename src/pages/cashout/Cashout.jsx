import "../../Styles.css";
import { Nav } from "../../shared-components/navigations/Nav";

export function Cashout() {
  return (
    <div className="p-2 flex flex-col flex-grow gap-0.5 bg-gray-300 rounded-2xl shadow-inner transition-all min-h-0 overflow-hidden">
      <Nav />
      <div className="p-2 flex flex-grow min-h-0 overflow-auto rounded-lg">
        CASHOUT CONTENTS HERE
      </div>
    </div>
  );
}
