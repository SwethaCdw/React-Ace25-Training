import { useParams } from "react-router";
import { useEffect, useState } from "react";
import styles from "../../screens/shoppingScreen/shoppingScreen.module.css";
import { fetchProductDetails } from "../../services/fetchData/fetchData.js";
import CardItemContainer from "../../components/cardItemContainer/cardItemContainer";


const CardsContainer = ({setIsLoading}) => {
    const [productData, setProductData] = useState([]);
    const {categoryID} = useParams();

    // Fetch products from external API
    useEffect (()=>{
        const fetchDetails = async (categoryID) => {
            const data = await fetchProductDetails(categoryID);
            setProductData(data);
            setIsLoading(false);
        }

        fetchDetails(categoryID);

    },[])


    const Products = productData && productData.map((product) => <CardItemContainer key={product.name} product={product} />)


    return(
        <div className={styles.card_container}>
            {Products}
        </div>
    )
}




export default CardsContainer;