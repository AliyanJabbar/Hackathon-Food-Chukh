const Dialog = ({
  orderId,
  handleFunction,
}: {
  orderId: string;
  handleFunction: () => void;
}) => {
  return (
    <div className="z-[999] fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[500px]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl text-txtBlack font-bold">
            Copy your Order ID:
          </h1>
          <button
            onClick={() => {
              handleFunction();
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <input
          type="text"
          value={orderId || "Expired"}
          readOnly
          className="w-full p-2 border-2 text-blackish border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <div className="mt-4 flex items-center justify-between">
          <p className="text-md text-txtBlack">
            This is your last chance to copy it!
          </p>
          <button
            onClick={() => {
              handleFunction();
            }}
            className="mr-2 px-4 py-2 font-bold text-gray-600 hover:text-gray-800"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
