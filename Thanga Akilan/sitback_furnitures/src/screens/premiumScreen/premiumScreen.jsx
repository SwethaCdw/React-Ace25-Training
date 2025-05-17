import { PREMIUM_SCREEN as CONSTANTS } from "../../constants/PremiumScreen.js";
import Header from "../../components/header/header";
import styles from "./premiumScreen.module.css"

const PremiumScreen = () => {
    return(
        <>
        <Header />
        <main className={styles.premiumPage_section}>
            <img className={styles.premiumPage_background} src={CONSTANTS.BG_IMAGE.LINK} alt={CONSTANTS.BG_IMAGE.NAME} />
            <div className={styles.premiumPage_text_content}>
                <h2 className={styles.premiumPage_heading}>{CONSTANTS.HEADING}</h2>
                <h3 className={styles.premiumPage_subheading}>{CONSTANTS.SUBHEADING}</h3>
            </div>
        </main>
        </>
    )
}

export default PremiumScreen;