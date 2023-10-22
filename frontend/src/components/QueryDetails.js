const QueryDetails = ({query}) => {
    return(
        
        <div className="content-details">
            <h4>{query.title}</h4>
            <p>{query.body}</p>
        </div>
    )
}

export default QueryDetails