import styles from './PromoImage.module.css'

const PromoImage = ({image}) => {

    return(
        <div className={styles.Promo_image_wrapper}>
            <img src={`../src/assets/images/${image}.png`} alt={image} />
        </div>
    )
}

export default PromoImage;