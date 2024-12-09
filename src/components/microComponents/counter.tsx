import { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";

interface QuantitySelectorProps {
  initialQuantity?: number;
  onQuantityChange: (quantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  initialQuantity = 1,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);

  // Use `useEffect` to notify the parent component of the quantity change
  useEffect(() => {
    onQuantityChange(quantity);
  }, [quantity, onQuantityChange]);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={decrement}
        className="flex justify-center items-center w-[60px] h-[50px] bg-transparent border border-txtlight"
      >
        <RiSubtractFill />
      </button>
      <input
        type="text"
        value={quantity}
        readOnly
        className="w-[60px] h-[50px] font-sans text-txtBlack text-[20px] text-bold text-center border border-x-0 border-txtlight "
      />
      <button
        onClick={increment}
        className="flex justify-center items-center w-[60px] h-[50px] bg-transparent border border-txtlight"
      >
        <IoAdd width={15} />
      </button>
    </div>
  );
};

export default QuantitySelector;
