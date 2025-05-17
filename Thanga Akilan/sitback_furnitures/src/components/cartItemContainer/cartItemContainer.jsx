import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/cartContext";
import Cart from "../cart/cart.jsx";

const CartItemContainer = ({data}) => {
    const {cart, setCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(data.quantity);
    const {name, price} = data;
  
    useEffect(()=>{
      setQuantity(data.quantity)
    },[data]);
  
      useEffect(() => {
        if(quantity==0){
          setCart(cart.filter(item => item.name != name && item.price != price));
          return;
        }
        const existingIndex = cart.findIndex(
          item => item.name === name && item.price === price
        );
  
        if (existingIndex !== -1) {
          const updatedCart = [...cart];
          updatedCart[existingIndex] = {
            ...updatedCart[existingIndex],
            quantity: quantity,
          };
          setCart(updatedCart);
      }}, [quantity]);
  
  
    
      const handleIncrease = () => {
        setQuantity(prev => prev+1);
      };
    
      const handleDecrease = () => {
        if(quantity>0){
        setQuantity(prev => prev-1)
        }
      };
    return(
        <Cart name={data.name} 
        price={data.price} 
        imageURL={data.photo} 
        handleDecrease={handleDecrease} 
        handleIncrease={handleIncrease}  
        quantity={quantity} />
    )
}

export default CartItemContainer;