import React, {useState, useEffect} from 'react'
import baseUrl from '../libs/Constants.js'

const FetchThread = (props) => {

    const [threads, setThreads] = useState([]);
    const locationApi = `/threads?offset=${props.offset}`;

    useEffect(() => {
        fetch(baseUrl + locationApi, {method:"GET"})
        .then(res => res.json())
        .then(
          result => {
            setThreads(result)
          },
          error => {
            console.log(error)
          },
        )
    }, [])
  

    return (
        <div>
            {
                threads.map(thread => <a href={thread.id}>{thread.title}<br></br></a>)
            }
        </div>
    )
}

export default FetchThread