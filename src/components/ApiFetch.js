import React, {useState, useEffect} from 'react'

const ApiFetch = () => {

    const [threads, setThreads] = useState([]);
    const baseUrl = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com"

    useEffect(() => {
        fetch(baseUrl + "/threads", {method:"GET"})
        .then(res => res.json())
        .then(
          result => {
            setThreads(result)
          },
          error => {
            console.log(error)
          },
        )
    })
  

    return (
        <div>
            <ul>
                {
                    threads.map(thread => <li key={thread.id}>{thread.title}</li>)
                }
            </ul>
        </div>
    )
}

export default ApiFetch