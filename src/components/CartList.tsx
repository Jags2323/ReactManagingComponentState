interface Props {
  cartItems: string[];
  onClear: () => void;
}

const CartList = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <div>CartList</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default CartList;
