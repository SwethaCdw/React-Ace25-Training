import {CartContext} from "../../context/cartContext.jsx" 
import { useContext } from "react";
import Card from "../card/card.jsx";


const CardItemContainer = ({product}) => {
    const {cart, setCart} = useContext(CartContext);
    const {name, price, photo, description} = product;

    // Add to cart
    const handleClick = () =>{
    const existingIndex = cart.findIndex(
      item => item.name === name && item.price === price
    );
    if (existingIndex == -1) {
      const newItem = { name, price, photo, description, quantity: 1 };
      setCart([...cart, newItem]);
    }else{
        const updatedCart = cart.map((item, index) =>
        index === existingIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    }}


    return(
        <Card key={product.id} 
            name={product.name} 
            price={product.price} 
            imageURL={product.photo} 
            description={product.description} 
            gurantee={product.guarantee} 
            handleClick={handleClick} />
    )
}


export default CardItemContainer;