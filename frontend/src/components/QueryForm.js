import { useState } from 'react'

const QueryForm = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [category, setCategory] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const query = {title, body, category}

        const response = await fetch('/api/queries', {
            method: 'POST',
            body: JSON.stringify(query),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        } 
        if( response.ok ) {
            setTitle('')
            setBody('')
            setCategory('')
            setError(null)
            console.log('New query added', json)
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Enter Query</h3>

            <label>Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Query:</label>
            <input
                type="text"
                onChange={(e) => setBody(e.target.value)}
                value={body}
            />

            <label>Category</label>
            <input
                type="text"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
            />

            <button>Add</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default QueryForm