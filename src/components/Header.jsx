import { IoSearchSharp } from "react-icons/io5";
import { TfiShoppingCartFull } from "react-icons/tfi";

const Header = ({ searchItem, setSearchItem, cartItem, setShowPopup }) => {
  return (
    <header className="bg-white relative shadow-lg flex md:px-5 md:py-2.5 px-1.5 py-2.5 gap-1.5 justify-between">
      <div className="md:text-3xl text-2xl font-bold text-slate-800 logo hover:text-green-400 transition-all">
        Tasawar
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex justify-center items-center gap-2 px-2.5 py-1.5 bg-slate-200 inset-shadow-sm rounded-sm"
      >
        <IoSearchSharp className="font-bold text-slate-800 text-lg" />
        <input
          className="outline-0 text-slate-800 text-md w-[40vw]"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </form>
      <div
        onClick={() => setShowPopup(true)}
        className="bg-slate-300 group relative py-2.5 px-3 flex align-middle justify-center text-shadow-slate-800 inset-shadow-sm rounded-sm cursor-pointer hover:bg-slate-800 hover:text-white transition-all"
      >
        <span className="bg-slate-300 rounded-full text-center absolute top-0 left-[-12px] w-6 h-6.5 group-hover:bg-slate-800 transition-all">
          {cartItem.length}
        </span>
        <TfiShoppingCartFull />
      </div>
    </header>
  );
};

export default Header;
