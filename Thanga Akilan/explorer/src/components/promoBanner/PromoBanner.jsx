import styles from "../../pages/home/Home.module.css";
import PromoImage from "../promoImage/PromoImage"

const PromoBanner = ({children, imageName}) => {
    return(
        <section className={styles.promo_section}>
                {children}
            <PromoImage image={imageName} />
        </section>
    )
}

export default PromoBanner;