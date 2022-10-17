function App() {
  return (
    <div className="bg-slate-400 py-20 px-10 flex flex-col space-y-5">
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Blue Curtain</span>
          <span className="font-semibold">$170</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Grey Sofa</span>
          <span className="font-semibold">$800</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$970</span>
        </div>
        <div className="mt-5 p-3 bg-blue-500 rounded-xl text-white text-center mx-auto w-1/2">
          Checkout
        </div>
      </div>
    </div>
  );
}

export default App;
