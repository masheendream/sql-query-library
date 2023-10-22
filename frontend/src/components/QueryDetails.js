const QueryDetails = ({query}) => {
    return(
        
        <div className="content-details">
            <div className="content-thumbnail">
                
                <a href={content.url}>
                    <img src={content.thumbnail}/>
                </a>
            </div>
            <div className="content-description">
                <img src={content.feedIcon}/>
                <h4>{content.title}</h4>
                <p>{content.body}</p>
            </div>
        </div>
    )
}

export default QueryDetails