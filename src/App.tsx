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
  return (
    <div className="w-[100%] h-[10rem] flex justify-center items-center">
      <form className="w-[70%] h-[60%] ">
        <div className="text-center text-2xl">Place your order</div>
        <div className="w-[100%] h-[50%] bg-[#eae8e8] flex justify-center items-center gap-[20px]">
          <div className="w-[70px]  h-[50px]  flex justify-center items-center">
            <select className="w-[60px] text-[12px] h-[40px] outine-no border rounded-md">
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
function ProductBought({ list }: any) {
  return (
    <div className="w-[100%] h-[10rem] bg-[gray]">
      {products.map((el: any) => (
        <div>
          <Item />
        </div>
      ))}
    </div>
  );
}
function Item(): any {
  return <div></div>;
}
function Footer(): any {}
