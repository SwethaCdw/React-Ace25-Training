const SuccessBanner = ({name, source, destination}) => {
    return (
        <div className="success-banner">
            <p className="success-text">
                Thank You <b className="extra-bold">{name}</b> for expressing your interest in travelling with us.
                Our Sales team will get back with the best packages from <b>{source}</b> to <b>{destination}</b>.
            </p>
        </div>
    )
}

export default SuccessBanner;