import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import ItemCard from '../../components/item-card/ItemCard';
import CardListContainer from '../../containers/card-list-container/CardListContainer';
import CartContainer from '../../containers/cart-container/CartContainer';
import './home-screen.css'

const HomeScreen = () => {
    const [productData, setProductData] = useState([]);
    const { cartData } = useCartContext();
    const { categoryId } = useParams();
    useEffect(() => {
        fetch(`https://jsonmockserver.vercel.app/api/shopping/furniture/products?category=${categoryId}`)
            .then((response) => response.json())
            .then((data) => setProductData(data))
            .catch(() => {
                throw new Error("Unexpected error occurred while fetching the data")
            });
    }, [categoryId]);
    return (
        <div className='home-screen-wrapper'>
            <CardListContainer>
                {productData.map((data, index) => <ItemCard key={index} cardData={data} />)}
            </CardListContainer>
            { cartData.cartItems.length > 0 && <CartContainer /> }
        </div>
    )
}

export default HomeScreen;