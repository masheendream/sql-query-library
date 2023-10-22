import { useEffect, useState } from 'react'

const Home = () => {
    const [queries, setQueries] = useState(null)

    useEffect(() => {
    const fetchQueries = async () => {
        const response = await fetch('/api/queries')
        
        const json = await response.json()
        
        console.log(json)

        if ( response.ok ){
            setQueries(json)
        } else {
            setQueries(null)
        }
    }

    fetchQueries()

}, [])

    return(
        <div className="home">
            <div className="queries">
                {queries && queries.map( (queries) => (
                    <p key={queries._id}> {queries.title} </p>   // previous to test
                ))}   
            </div> 
        </div>
    )
}

export default Home