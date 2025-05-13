import { useParams } from "react-router";
import Card from "../components/card/card";
import { useContext, useEffect, useState } from "react";
import styles from "../screens/shoppingScreen/shoppingScreen.module.css";



const CardsContainer = ({setIsLoading}) => {
    const [productData, setProductData] = useState([]);
    const {categoryID} = useParams();




    useEffect (()=>{
        const fetchProductDetails = async (category) => {
            const response = await fetch(`https://jsonmockserver.vercel.app/api/shopping/furniture/products?category=${category}`);
            const data = await response.json();
            setProductData(data);
            setIsLoading(false);
        }

        fetchProductDetails(categoryID);
    },[])

    return(
        <div className={styles.card_container}>
        {productData && productData.map((product)=><Card key={product.id} name={product.name} price={product.price} imageURL={product.photo} description={product.description} gurantee={product.guarantee} />)}
        </div>
    )
}




export default CardsContainer;