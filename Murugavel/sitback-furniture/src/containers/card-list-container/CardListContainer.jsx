import { lazy, Suspense } from 'react';
import './card-list-container.css'
import Loader from '../../components/loader/Loader';
import { ClipLoader } from 'react-spinners';

const ItemCard = lazy(() => import('../../components/item-card/ItemCard'));

const CardListContainer = ({ productData }) => {
    return (
        <div className="card-list">
            {productData.map((data) =>
                <Suspense fallback={<Loader><ClipLoader size={50} color={'var(--loader)'} /></Loader>}>
                    <ItemCard key={data.id} cardData={data} />
                </Suspense>)}
        </div>
    )
}

export default CardListContainer;