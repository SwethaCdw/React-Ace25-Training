import '../assets/styles/success-banner.css'

const SuccessBanner = ({ submittedData }) => {
    return (
        <div className="success-banner">
            <p className="success-text">
                Thank You <b className="extra-bold">{submittedData.name}</b> for expressing your interest in travelling with us.
                Our Sales team will get back with the best packages from <b>{submittedData.source}</b> to <b>{submittedData.destination}</b>.
            </p>
        </div>
    )
}

export default SuccessBanner;