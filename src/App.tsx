import { useState } from "react";

const products = [
  { id: 1, name: "Sardine", packed: false, quantity: 3 },
  {
    id: 2,

    name: "shoes",
    packed: false,
    quantity: 5,
  },
  {
    id: 3,
    name: "clothes",
    packed: false,
    quantity: 15,
  },
];

export default function App() {
  return (
    <div>
      <Header />
      <Form />
      <ProductBought />
      <Footer />
    </div>
  );
}

function Header(): any {
  return <div className="w-[100%] h-[3rem] bg-[blue]"></div>;
}
function Form(): any {
  const [quantity, setQuantity] = useState<number>(1);
  const [description, setDescription] = useState<string>("");
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!description) {
      return;
    }

    const newItem = {
      description,
      quantity,
      id: Date.now(),
      packed: false,
    };
    console.log(newItem);

    // setting to initial state
    setQuantity(1);
    setDescription("");
  };

  return (
    <div className="w-[100%] h-[10rem] flex justify-center items-center">
      <form className="w-[70%] h-[60%] " onSubmit={handleSubmit}>
        <div className="text-center text-2xl">Place your order</div>
        <div className="w-[100%] h-[50%] bg-[#eae8e8] flex justify-center items-center gap-[20px]">
          <div className="w-[70px]  h-[50px]  flex justify-center items-center">
            <select
              value={quantity}
              onChange={(e: any) => {
                setQuantity(Number(e.target.value));
              }}
              className="w-[60px] text-[12px] h-[40px] outine-no border rounded-md"
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="w-[220px]  h-[40px] flex rounded-md pl-[20px]">
            <input
              className="pl-[20px]"
              placeholder="input item..."
              type="text"
              value={description}
              onChange={(e: any) => {
                setDescription(e.target.value);
              }}
            />
          </div>

          <button className="ml-[40px] w-[100px] h-[40px] text-white text-[12px] cursor-pointer bg-[blue] rounded-md ">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}
function ProductBought() {
  return (
    <ul className="w-[100%] h-[10rem] bg-[gray] flex justify-center items-center">
      {products.map((el: any) => (
        <Item item={el} key={el.id} />
      ))}
    </ul>
  );
}
function Item({ item }: any) {
  return (
    <div className="w-[20%] h-[50%] flex justify-center items-center">
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity}
          {item.name}
        </span>
        <button>❌</button>
      </li>
    </div>
  );
}
function Footer(): any {}
