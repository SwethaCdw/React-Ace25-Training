import { LOADER } from '../constants/textConstants';
import '../assets/styles/loader.css'

const Loader = () => {
    return (
        <div className="loader">
            <p className="loading-text">{LOADER.LOADING_TEXT}</p>
        </div>
    )
}

export default Loader;