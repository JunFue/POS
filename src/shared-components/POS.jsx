import "./POS.css";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { BasicTable } from "/src/shared-components/Table.jsx";

export function POS() {
  const [currentTime, setCurrentTime] = useState(
    dayjs().format("MMMM D, YYYY h:mm:ss A")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format("MMMM, D, YYYY h:mm:ss A"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="pos-container collapse">
      <div className="header-container">
        <img className="logo" src="logo.png" alt="green-secrets-logo" />
        <div className="header-title">GREEN SECRETS POS</div>
      </div>
      <div className="cashier-info-container">
        <div>Cashier Name: </div>
        <div>--name--</div>
        <div>Transaction Date: </div>
        <div>{currentTime}</div>
        <div>Amount Rendered: </div>
        <div>--amount--</div>
        <div>Costumer Name: </div>
        <div>--name--</div>
        <div>Transaction No.: </div>
        <div>--abc123--</div>
        <div>Discount: </div>
        <div>--amount--</div>
        <div>Item Barcode: </div>
        <div>--code--</div>
        <div>Available Stocks: </div>
        <div>--amount--</div>
        <div>Change: </div>
        <div>--amount--</div>
        <div>Quantity: </div>
        <div>--quantity--</div>
        <div>DISPLAY NOTIF</div>
        <div>DISPLAY NOTIF</div>
        <div>Grand Total: </div>
        <div>--amount--</div>
      </div>
      <div className="item-descriptions">NO PRODCUT AVAILABLE</div>
      <div className="buttons-container">
        <button>NEW COSTUMER</button>
        <button>ADD TO CART</button>
        <button>DONE</button>
        <button>CLEAR</button>
        <button>EXPORT</button>
        <button>LOGIN</button>
      </div>
      <div className="table-container">
        <BasicTable />
      </div>
    </div>
  );
}
