import styles from './SuccessBanner.module.css';
import { SUCCESS_BANNER as CONSTANTS } from '../../contants';


const SuccessBanner = ({submittedData})=>{
    const {name, source, destination} = submittedData;
    return(
        <div className={styles.success_banner_container}>
            <p>{CONSTANTS.DESCRIPTION(name, source, destination)}</p>
        </div>
    )
}

export default SuccessBanner;