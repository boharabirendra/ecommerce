import clsx from "clsx";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { decrement, deleteItem, increment } from "../redux/slice/cartSlice";

type CartProps = {
  isOpen: boolean;
  toggleCart: () => void;
};

const Cart = ({ isOpen, toggleCart }: CartProps) => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.cartProduct);

  const totalPrice = data.reduce((accumulator, item) => {
    return accumulator + item.product.price * item.count;
  }, 0);

  const totalItems = data.reduce((accumulator, item) => {
    return accumulator + item.count;
  }, 0);

  const handleDeleteCardItem = (id: number) => {
    dispatch(deleteItem(id));
  };

  return (
    <div
      className={clsx("cart__container d-flex", {
        "cart__container--open": isOpen,
      })}
    >
      <Button
        onClick={toggleCart}
        className="cart__container--close"
        id="p0-btn"
      >
        <Image src="/cross.png" />
      </Button>
      <div className="cart__container__top">
        <h1>Your Cart</h1>
        {data.map((item, index) => (
          <div key={index} className="cart d-flex">
            <div className="cart__left">
              <Image src={item.product.image} />
            </div>
            <div className="cart__right d-flex">
              <div className="cart__right__top justify-content-between d-flex align-items-center">
                <div className="cart__right__top--title">
                  {item.product.title}
                </div>
                <div className="cart__right__top--delete">
                  <Image
                    onClick={() => {
                      handleDeleteCardItem(item.product.id);
                    }}
                    title="Delete"
                    src="/Trash.png"
                  />
                </div>
              </div>
              <div className="cart__right__bottom justify-content-between d-flex">
                <div className="cart__right__bottom__price d-flex align-items-center">
                  <span className="cart__right__bottom__price--old">
                    ${(Number(item.product.price) * 0.3).toFixed(2)}
                  </span>
                  <span className="cart__right__bottom__price--new">
                    ${item.product.price}
                  </span>
                </div>
                <div className="cart__right__bottom--quantity d-flex justify-content-between">
                  <Button
                    onClick={() => {
                      dispatch(decrement(item.product.id));
                    }}
                    title="Decrement"
                    id="p0-btn"
                    disabled={item.count === 0}
                  >
                    <Image src="/Minus.png" />
                  </Button>
                  <span>{item.count}</span>
                  <Button
                    onClick={() => {
                      dispatch(increment(item.product.id));
                    }}
                    title="Increment"
                    id="p0-btn"
                  >
                    <Image src="/Plus.png" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="total d-flex justify-content-between">
        <div className="d-flex justify-content-between">
          <div className="total__items d-flex align-items-center">
            <span className="total__title">Subtotal</span>
            <span className="total__products">({totalItems} items)</span>
          </div>
          <div className="total__price">${totalPrice.toFixed(2)}</div>
        </div>
        <Button variant="secondary" className="w-fixed">
          CONTINUE TO CHECKOUT
        </Button>
        <p className="total__bottom__text">
          Psst, get it now before it sells out.
        </p>
      </div>
    </div>
  );
};

export default Cart;
