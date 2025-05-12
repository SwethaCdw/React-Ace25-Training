import styles from './SuccessBanner.module.css';
import { SUCCESS_BANNER as CONSTANTS } from '../../contants';


const SuccessBanner = ({name, source, destination})=>{
    console.log(name);
    return(
        <div className={styles.success_banner_container}>
            <p>{CONSTANTS.DESCRIPTION(name, source, destination)}</p>
        </div>
    )
}

export default SuccessBanner;