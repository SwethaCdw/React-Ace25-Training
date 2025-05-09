import { PREMIUM } from '../../constants';
import './premium-screen.css'

const PremiumScreen = () => {
    return (
        <div className='premium-couch-wrapper'>
            <div className="details-text-wrapper">
                <p className="details-text">{PREMIUM.NAME}</p>
                <p className="announcement-text">{PREMIUM.ANNOUNCEMENT}</p>
            </div>
        </div>
    )
}

export default PremiumScreen;