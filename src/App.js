function App() {
  return (
    <div className="bg-slate-400 py-20 px-10 flex flex-col space-y-5 min-h-screen">
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex justify-between odd:bg-blue-50 even:bg-yellow-50"
            >
              <span className="text-gray-500">Grey Sofa</span>
              <span className="font-semibold">$800</span>
            </div>
          ))}
        </ul>
        {["a", "b", "c", ""].map((c, i) => (
          <li className="list-none bg-red-300 py-2 empty:hidden" key={i}>
            {c}
          </li>
        ))}
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$970</span>
        </div>
        <button className="mt-5 p-3 bg-blue-500 rounded-xl text-white text-center mx-auto block w-3/4 hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:bg-red-500">
          Checkout
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden group">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>

        <div className="p-6 rounded-3xl relative -top-5 bg-white">
          <div className="flex justify-between items-end relative -top-16">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="w-24 h-24 bg-red-400 rounded-full group-hover:bg-yellow-300 transition-colors" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="-mt-10 -mb-5 flex flex-col items-center">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500"> New York, USA</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <div className="mb-5 flex justify-between items-center">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐️ 5.0</span>
            <span className="shadow-xl p-2 rounded-md">💖</span>
          </div>
        </div>

        <div className="bg-zinc-400 h-72 mb-5" />

        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 bg-yellow-500 rounded-full focus:ring-2 ring-offset-2 ring-yellow-500 transition"></button>
              <button className="w-5 h-5 bg-indigo-500 rounded-full focus:ring-2 ring-offset-2 ring-indigo-500 transition"></button>
              <button className="w-5 h-5 bg-teal-500 rounded-full focus:ring-2 ring-offset-2 ring-teal-500 transition"></button>
            </div>
            <div className="flex items-center space-x-5">
              <button className="bg-blue-200 flex justify-center items-center rounded-lg aspect-square w-8 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="bg-blue-200 flex justify-center items-center rounded-lg aspect-square w-8 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 text-center text-white rounded-lg px-6 py-2 text-xs">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <form className="flex flex-col space-y-2 bg-blue-500 p-5 focus-within:bg-blue-200">
        <input
          type="text"
          required
          // invalid
          placeholder="Username"
          className="required:border-2 border-white-500 invalid:bg-red-300 valid:bg-teal-300"
        />
        <input
          type="text"
          required
          placeholder="Username2"
          className="placeholder-shown:bg-teal-300 placeholder:text-red-500"
        />
        <input
          type="text"
          disabled
          placeholder="Username3"
          className="disabled:opacity-0"
        />
        <input type="password" required placeholder="Password" />
        <input type="submit" value="login" className="bg-white" />
      </form>

      <form className="flex flex-col p-5 space-y-2 bg-blue-500">
        <input
          type="text"
          required
          placeholder="username"
          className="border p-1 border-gray-400 rounded-md peer"
        />
        <span className="hidden peer-invalid:block peer-invalid:text-red-500">
          This input is invalid
        </span>
        <span className="hidden peer-valid:block peer-valid:text-teal-500">
          Awesome!
        </span>
        <span className="hidden peer-hover:block peer-hover:text-amber-500">
          Sleep!
        </span>
        <input type="submit" value="Login" className="bg-white" />
      </form>
    </div>
  );
}

export default App;
