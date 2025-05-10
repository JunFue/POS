import { useRef, useState } from "react";
import { ItemRegTable } from "../../shared-components/tables/inventory-tables/ItemRegTable.Jsx";

export function ItemReg({ itemRegTable, setItemRegTable }) {
  const [tableData, setTableData] = useState([null]);
  const [isButton, setIsButton] = useState([false]);
  const barcode = useRef([null]);
  const name = useRef([null]);
  const unitPrice = useRef([null]);
  const packaging = useRef([null]);
  const category = useRef([null]);

  function AddItem() {
    setIsButton((prev) => !prev);
  }

  function getData(e) {
    setItemRegTable({ ...itemRegTable, [e.target.name]: e.target.value });
  }

  function regItem() {
    setTableData((prev) => [
      ...prev,
      {
        barcode: itemRegTable.barcode,
        name: itemRegTable.name,
        price: itemRegTable.price,
        packaging: itemRegTable.packaging,
        category: itemRegTable.category,
      },
    ]);
  }

  return (
    <div className="relative z-0 w-full overflow-auto rounded-lg bg-white shadow">
      <div className="my-[2vh] mx-[2vw]">Item Registry</div>
      <div className="flex flex-row">
        <button
          className="absolute top-3 right-1 bg-emerald-700 border-[none] outline-[none] px-[1vw] py-[10px] text-[0.8vw] font-bold text-[#fff] rounded-[5px] [transition:all_ease_0.1s] [box-shadow:0px_5px_0px_0px_#50C878] active:translate-y-[5px] active:[box-shadow:0px_0px_0px_0px_#a29bfe]"
          onClick={AddItem}
        >
          Register New Item
        </button>

        {isButton && (
          <div className="gap-[1vw] [&>*]:text-[0.8vw] [&>*]:p-[0.5vw] p-[1vw] mt-[1vw] mx-auto grid grid-cols-[0.5fr_0.5fr_0.5fr_0.5fr] border border-amber-600 [&>*]:bg-gray-100">
            <div>Barcode</div>
            <input
              type="text"
              ref={barcode}
              onChange={getData}
              name="barcode"
              value={itemRegTable.barcode}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  name.current?.focus();
                }
              }}
              required
            />
            <div>Name</div>
            <input
              type="text"
              name="name"
              ref={name}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  unitPrice.current?.focus();
                }
              }}
              required
            />
            <div>Unit Price</div>
            <input
              ref={unitPrice}
              name="price"
              type="number"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  packaging.current?.focus();
                }
              }}
              required
            />
            <div>Packaging</div>
            <input
              ref={packaging}
              name="packaging"
              type="text"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  category.current?.focus();
                }
              }}
            />
            <div>Category</div>
            <select id="category" name="category" ref={category}>
              <option value="volvo">DETOX</option>
              <option value="saab">OTC</option>
              <option value="opel">Services</option>
              <option value="audi">Others</option>
            </select>
            <button className="!bg-[#c83b3b] border-[none] outline-[none] px-[1vw] py-[10px] text-[0.8vw] font-bold text-[#fcfcfc] rounded-[5px] [transition:all_ease_0.1s] [box-shadow:0px_5px_0px_0px_#c87070] active:translate-y-[5px] active:[box-shadow:0px_0px_0px_0px_#a29bfe]">
              Clear
            </button>
            <button
              onClick={regItem}
              className="!bg-emerald-700 border-[none] outline-[none] px-[1vw] py-[10px] text-[0.8vw] font-bold text-[#fff] rounded-[5px] [transition:all_ease_0.1s] [box-shadow:0px_5px_0px_0px_#50C878] active:translate-y-[5px] active:[box-shadow:0px_0px_0px_0px_#a29bfe]"
            >
              Add
            </button>
          </div>
        )}

        {/* <div className="grid grid-cols-[auto_auto_auto_auto_auto_auto] w-full h-fit [&>*]:truncate overflow-hidden whitespace-nowrap [&>*]:border [&>*]:border-amber-700 text-[0.8vw]">
          <div>Barcode</div>
          <div>Name</div>
          <div>Unit Price</div>
          <div>Packaging</div>
          <div>Category</div>
          <div>Add</div>
          <input />
          <input />
          <input />
          <input />
          <input />
          <input />
        </div> */}
      </div>
      <ItemRegTable tableData={tableData} setTableData={setTableData} />
    </div>
  );
}
