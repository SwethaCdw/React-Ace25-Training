import ItemCard from '../../components/item-card/ItemCard';
import './card-list-container.css'

const CardListContainer = ({ productData }) => {
    return (
        <div className="card-list">
            {productData.map((data) => <ItemCard key={data.id} cardData={data} />)}
        </div>
    )
}

export default CardListContainer;