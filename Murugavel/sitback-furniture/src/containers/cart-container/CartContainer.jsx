import { useCartStateContext } from '../../context/CartContext';
import './cart-container.css'
import { lazy, Suspense } from 'react';
import Loader from '../../components/loader/Loader';
import { ClipLoader } from 'react-spinners';

// Lazy loading the cart details container
const CartDetailsContainer = lazy(() => import('../cart-details-container/CartDetailsContainer')); 

const CartContainer = () => {
    const cartData = useCartStateContext(); // fetching cart items data from the cart context

    if (cartData.cartItems.length === 0) {
        return null; // doesn't render anything if there is no items in the cart
    }

    return (
        <div className="cart-container">
            <h2 className="cart-text">MY CART</h2>
            <Suspense fallback={<Loader><ClipLoader size={100} color={'var(--loader)'} /></Loader>}>
                <CartDetailsContainer cartData={cartData} />
            </Suspense>
        </div>
    )
}

export default CartContainer;