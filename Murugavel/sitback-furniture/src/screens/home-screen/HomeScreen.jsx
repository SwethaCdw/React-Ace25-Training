import {useParams} from 'react-router-dom'
import {useEffect, useState } from 'react';
import CardListContainer from '../../containers/card-list-container/CardListContainer';
import CartContainer from '../../containers/cart-container/CartContainer'
import './home-screen.css'

const HomeScreen = () => {
    const [productData, setProductData] = useState([]);
    const { categoryId } = useParams();
    // Fetching of products data list
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
            <CardListContainer productData={productData} />
            <CartContainer />
        </div>
    )
}

export default HomeScreen;