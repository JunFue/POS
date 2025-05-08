import { Route, Routes } from "react-router";
import { useState } from "react";
import "./App.css";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Cashout } from "./pages/cashout/Cashout";
import { Transactions } from "./pages/transactions/Transactions";
import { Inventory } from "./pages/inventory/Inventory";
import { POS } from "./shared-components/POS";

function App() {
  const [itemRegTable, setItemRegTable] = useState({
    barcode: "",
    name: "",
    price: "",
    packaging: "",
    category: "",
  });
  const [currentInput, setCurrentInput] = useState({
    cashierName: "",
    amountRendered: "",
    costumerName: "",
    discount: "",
    itemBarcode: "",
    quantity: "",
  });

  return (
    <>
      <div className="page-container">
        <POS currentInput={currentInput} setCurrentInput={setCurrentInput} />
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="cashout" element={<Cashout />} />
          <Route
            path="inventory"
            element={
              <Inventory
                itemRegTable={itemRegTable}
                setItemRegTable={setItemRegTable}
              />
            }
          />
          <Route path="transactions" element={<Transactions />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
