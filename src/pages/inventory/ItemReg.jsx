import { useRef, useState } from "react";
import { ItemRegTable } from "../../shared-components/tables/inventory-tables/ItemRegTable.Jsx";

export function ItemReg({ itemRegTable, setItemRegTable }) {
  const [tableData, setTableData] = useState([]);
  const [isButton, setIsButton] = useState(false);
  const barcode = useRef([null]);
  const name = useRef([null]);
  const unitPrice = useRef([null]);
  const packaging = useRef([null]);
  const category = useRef([null]);

  console.log(isButton);
  function AddItem() {
    setIsButton((prev) => !prev);
  }

  function getData(e) {
    setItemRegTable({ ...itemRegTable, [e.target.name]: e.target.value });
  }

  function clearForm() {
    setItemRegTable((prev) => ({
      ...prev,
      barcode: "",
      name: "",
      price: "",
      packaging: "",
      category: "",
    }));
  }

  function regItem() {
    const { barcode, name, price, packaging, category } = itemRegTable;

    // Check if any required field is empty
    if (!barcode || !name || !price || !packaging) {
      alert("Please fill in all fields before adding the item.");
      return; // stop the function here
    }

    setTableData((prev) => [
      ...prev,
      { barcode, name, price, packaging, category },
    ]);
    clearForm();
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
              className="border-[none] outline-[none] rounded-[15px] p-[1em] bg-[#ccc] [box-shadow:inset_2px_5px_10px_rgba(0,0,0,0.3)] [transition:300ms_ease-in-out] focus:bg-[white] focus:scale-105 focus:[box-shadow:13px_13px_100px_#969696,_-13px_-13px_100px_#ffffff]c"
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
              autoComplete="off"
              required
            />
            <div>Name</div>
            <input
              className="border-[none] outline-[none] rounded-[15px] p-[1em] bg-[#ccc] [box-shadow:inset_2px_5px_10px_rgba(0,0,0,0.3)] [transition:300ms_ease-in-out] focus:bg-[white] focus:scale-105 focus:[box-shadow:13px_13px_100px_#969696,_-13px_-13px_100px_#ffffff]"
              onChange={getData}
              type="text"
              name="name"
              value={itemRegTable.name}
              ref={name}
              autoComplete="off"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  unitPrice.current?.focus();
                }
              }}
              required
            />
            <div>Unit Price</div>
            <input
              className="border-[none] outline-[none] rounded-[15px] p-[1em] bg-[#ccc] [box-shadow:inset_2px_5px_10px_rgba(0,0,0,0.3)] [transition:300ms_ease-in-out] focus:bg-[white] focus:scale-105 focus:[box-shadow:13px_13px_100px_#969696,_-13px_-13px_100px_#ffffff]"
              ref={unitPrice}
              onChange={getData}
              value={itemRegTable.price}
              name="price"
              type="number"
              autoComplete="off"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  packaging.current?.focus();
                }
              }}
              required
            />
            <div>Packaging</div>
            <input
              className="border-[none] outline-[none] rounded-[15px] p-[1em] bg-[#ccc] [box-shadow:inset_2px_5px_10px_rgba(0,0,0,0.3)] [transition:300ms_ease-in-out] focus:bg-[white] focus:scale-105 focus:[box-shadow:13px_13px_100px_#969696,_-13px_-13px_100px_#ffffff]"
              ref={packaging}
              onChange={getData}
              value={itemRegTable.packaging}
              name="packaging"
              type="text"
              autoComplete="off"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  category.current?.focus();
                }
              }}
            />
            <div>Category</div>
            <select
              id="category"
              onChange={getData}
              value={itemRegTable.category}
              name="category"
              ref={category}
            >
              <option value="volvo">DETOX</option>
              <option value="saab">OTC</option>
              <option value="opel">Services</option>
              <option value="audi">Others</option>
            </select>
            <button
              onClick={clearForm}
              className="!bg-[#c83b3b] border-[none] outline-[none] px-[1vw] py-[10px] text-[0.8vw] font-bold text-[#fcfcfc] rounded-[5px] [transition:all_ease_0.1s] [box-shadow:0px_5px_0px_0px_#c87070] active:translate-y-[5px] active:[box-shadow:0px_0px_0px_0px_#a29bfe]"
            >
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
      </div>
      <ItemRegTable tableData={tableData} setTableData={setTableData} />
    </div>
  );
}
