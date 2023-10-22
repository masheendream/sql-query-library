import { useEffect, useState } from 'react'


import QueryDetails from '../components/QueryDetails'
import QueryForm from '../components/QueryForm'

const Home = () => {
    const [queries, setQueries] = useState(null)

    useEffect(() => {
    const fetchQueries = async () => {
        const response = await fetch('/api/queries')
        
        const json = await response.json()
        
        console.log(json)

        if ( response.ok ){
            setQueries(json)
        }
    }

    fetchQueries()

}, [])

    return(
        <div className="home">
            <div className="queries">
                {queries && queries.map( (query) => (
                    //<p key={queries._id}> {queries.title} </p>   // previous to test
                    <QueryDetails key={query._id} query = {query}/>
                ))}   
            </div> 
            <QueryForm/>
        </div>
    )
}

export default Home