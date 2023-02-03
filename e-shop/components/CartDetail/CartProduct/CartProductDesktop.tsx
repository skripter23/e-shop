import type { FC } from "react";
import styles from "../../../styles/CartDetail.module.scss";
import type { ICartProduct } from "./CartProduct";
import useCartProduct from "./useCartProduct";
import CartProductButtons from "./CartProductButtons";
import CartProductTotalPrice from "./CartProductTotalPrice";
import CartProductRemoveButton from "./CartProductRemoveButton";
import CartProductName from "./CartProductName";
import CartProductBasicPrice from "./CartProductBasicPrice";
import CartProductImage from "./CartProductImage";

const CartProductDesktop: FC<ICartProduct> = ({ data, setSnackBarOpen }) => {
  const { t, count, image, name, price, deleteProduct, addProductCount, removeOrAddProductCount, matches, slug } = useCartProduct(data);
  return (
    <div className={`${matches ? styles.cartItem : styles.cartItemMobile} items-center py-[20px] `}>
      <CartProductImage image={image} />
      <CartProductName name={name} slug={slug} />
      <CartProductBasicPrice price={price} t={t} />
      <CartProductButtons removeOrAddProductCount={removeOrAddProductCount} addProductCount={addProductCount} count={count} />
      <CartProductTotalPrice count={count} price={price} />
      <CartProductRemoveButton setSnackBarOpen={setSnackBarOpen} deleteProduct={deleteProduct} />
    </div>
  );
};

export default CartProductDesktop;
