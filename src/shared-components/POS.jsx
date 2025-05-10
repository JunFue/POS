import "../Styles.css";
import { Time } from "../utils/time";
import { useRef, useState } from "react";
import { POSTable } from "./tables/POS-tables/POSTable";

export function POS({ currentInput, setCurrentInput }) {
  const [defaultData, setDefaultData] = useState([]);

  const quantityRef = useRef(null);
  const barcodeRef = useRef(null);

  function inputCapture(e) {
    setCurrentInput({ ...currentInput, [e.target.name]: e.target.value });
  }

  function addToCart(event) {
    const isEnter = event?.key === "Enter";
    const isClick = event?.type === "click";

    // Only run logic if Enter key or click
    if (isEnter || isClick) {
      const barcode = barcodeRef.current?.value.trim();
      const quantity = quantityRef.current?.value.trim();

      if (barcode !== "" && quantity !== "") {
        setDefaultData((prev) => [
          ...prev,
          {
            barcode: currentInput.itemBarcode,
            item: "",
            price: "",
            quantity: currentInput.quantity,
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
      } else {
        alert("No item or quantity entered");
      }
    }
  }

  return (
    <div className="gap-1 flex flex-col w-1/2 m-0 h-full rounded-2xl bg-gray-300 shadow-inner transition-all duration-300">
      <div className="flex flex-row items-center">
        <img
          className="w-[60px] aspect-square h-auto"
          src="logo.png"
          alt="green-secrets-logo"
        />
        <div className="font-bold text-3xl flex-grow text-center">
          GREEN SECRETS POS
        </div>
      </div>

      <div
        className="gap-1 grid grid-cols-[auto_.5fr_auto_.5fr_auto_.5fr] h-fit [&>*]:truncate whitespace-nowrap overflow-hidden text-[0.8vw] px-[5px] 
        [&>*:nth-child(2)]:p-0 [&>*:nth-child(2)]:border [&>*:nth-child(2)]:border-emerald-900 
        [&>*:nth-child(6)]:p-0 [&>*:nth-child(6)]:border [&>*:nth-child(6)]:border-emerald-900 
        [&>*:nth-child(8)]:p-0 [&>*:nth-child(8)]:border [&>*:nth-child(8)]:border-emerald-900 
        [&>*:nth-child(12)]:p-0 [&>*:nth-child(12)]:border [&>*:nth-child(12)]:border-emerald-900 
        [&>*:nth-child(14)]:p-0 [&>*:nth-child(14)]:border [&>*:nth-child(14)]:border-emerald-900 
        [&>*:nth-child(20)]:p-0 [&>*:nth-child(20)]:border [&>*:nth-child(20)]:border-emerald-900 "
      >
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
            value={currentInput.discount}
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

      <div className="text-center text-[1vw]">NO PRODUCT AVAILABLE</div>

      <div className="mb-[0.5vh] grid grid-cols-6 h-7 gap-2 [&>*]:text-[0.75vw] [&>*]:bg-emerald-900 [&>*]:text-white [&>*]:p-2 [&>*]:rounded-md [&>*]:hover:bg-emerald-500 [&>*]:transition">
        <button>NEW COSTUMER</button>
        <button onClick={addToCart}>ADD TO CART</button>
        <button>DONE</button>
        <button>CLEAR</button>
        <button>EXPORT</button>
        <button>LOGIN</button>
      </div>

      <div className="flex-grow ">
        <POSTable tableData={defaultData} setTableData={setDefaultData} />
      </div>
    </div>
  );
}
