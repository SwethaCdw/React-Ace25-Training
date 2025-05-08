import styles from "../pages/details/Details.module.css";

const DescriptionContainer = ({description}) => {
    return(
        <>
            <section className={styles.description_section}>
                <p className={styles.place_description}>{description}</p>
            </section>
        </>
    )
}

export default DescriptionContainer;