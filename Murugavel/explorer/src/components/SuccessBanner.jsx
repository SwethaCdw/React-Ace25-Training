import { SUCCESSBANNER } from '../constants/textConstants';
import '../assets/styles/success-banner.css'

const SuccessBanner = ({ submittedData }) => {
    return (
        <div className="success-banner">
            <p className="success-text">
                {SUCCESSBANNER.THANKING_TEXT} <b className="extra-bold">{submittedData.name}</b> {SUCCESSBANNER.INFO_TEXT}
                <b>{submittedData.source}</b> {SUCCESSBANNER.PLACES_CONNECTOR} <b>{submittedData.destination}</b>.
            </p>
        </div>
    )
}

export default SuccessBanner;