import "./POS.css";
import { Time } from "../untils/time";
import { BasicTable } from "/src/shared-components/Table.jsx";
import { useRef, useState } from "react";

export function POS({ currentInput, setCurrentInput }) {
  //Table Data
  const [defaultData, setDefaultData] = useState([]);

  //Selector Transfer
  const quantityRef = useRef(null);
  const barcodeRef = useRef(null);

  function inputCapture(e) {
    setCurrentInput({ ...currentInput, [e.target.name]: e.target.value });
  }

  function addToCart(event) {
    if (event.key === "Enter" || event.button === 0) {
      const { itemBarcode, quantity } = currentInput;
      setDefaultData((prev) => [
        ...prev,
        {
          barcode: itemBarcode,
          item: "",
          price: "",
          quantity: quantity,
          total: "",
          delete: "",
        },
      ]);

      setCurrentInput((prev) => ({
        ...prev,
        itemBarcode: "",
        quantity: "",
      }));
      barcodeRef.current?.focus();
    }
  }
  console.log(currentInput);

  return (
    <div className="pos-container collapse">
      <div className="header-container">
        <img className="logo" src="logo.png" alt="green-secrets-logo" />
        <div className="header-title">GREEN SECRETS POS</div>
      </div>
      <div className="cashier-info-container">
        <div>Cashier Name: </div>
        <div>
          <input
            type="text"
            name="cashierName"
            value={currentInput.cashierName}
            onChange={inputCapture}
            placeholder="Your Name Here"
          />
        </div>
        <div>Transaction Date: </div>
        <div>
          <Time />
        </div>
        <div>Amount Rendered: </div>
        <div>
          <input
            type="number"
            name="amountRendered"
            value={currentInput.amountRendered}
            onChange={inputCapture}
            autoComplete="off"
            placeholder="₱0.00"
          />
        </div>
        <div>Costumer Name: </div>
        <div>
          <input
            type="text"
            name="costumerName"
            value={currentInput.costumerName}
            onChange={inputCapture}
            autoComplete="off"
            placeholder="---"
          />
        </div>
        <div>Transaction No.: </div>
        <div>--abc123--</div>
        <div>Discount: </div>
        <div>
          <input
            type="number"
            name="discount"
            value={currentInput.name}
            onChange={inputCapture}
            autoComplete="off"
            placeholder="₱0.00"
          />
        </div>
        <div>Item Barcode: </div>
        <div>
          <input
            type="text"
            name="itemBarcode"
            value={currentInput.itemBarcode}
            ref={barcodeRef}
            onChange={inputCapture}
            autoComplete="off"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                quantityRef.current?.focus();
              }
            }}
            placeholder="---"
          />
        </div>
        <div>Available Stocks: </div>
        <div>--amount--</div>
        <div>Change: </div>
        <div>--amount--</div>
        <div>Quantity: </div>
        <div>
          <input
            type="number"
            name="quantity"
            value={currentInput.quantity}
            ref={quantityRef}
            onChange={inputCapture}
            onKeyDown={addToCart}
            autoComplete="off"
            placeholder="0"
          />
        </div>
        <div>DISPLAY NOTIF</div>
        <div>DISPLAY NOTIF</div>
        <div>Grand Total: </div>
        <div>--amount--</div>
      </div>
      <div className="item-descriptions">NO PRODUCT AVAILABLE</div>
      <div className="buttons-container">
        <button>NEW COSTUMER</button>
        <button onClick={addToCart}>ADD TO CART</button>
        <button>DONE</button>
        <button>CLEAR</button>
        <button>EXPORT</button>
        <button>LOGIN</button>
      </div>
      <div className="table-container">
        <BasicTable tableData={defaultData} setTableData={setDefaultData} />
      </div>
    </div>
  );
}
