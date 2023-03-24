import React, {useState, useEffect} from 'react'
import baseUrl from '../libs/Constants.js'
import {useParams} from 'react-router-dom';

const FetchComment = (props) => {
  const params = useParams();

  const [comments, setComments] = useState([]);
  const locationApi = `/threads/${params.id}/posts?offset=${props.offset}`;

  useEffect(() => {
    fetch(baseUrl + locationApi, {method:"GET"})
    .then(res => res.json())
    .then(
      result => {
        setComments(result.posts)
      },
      error => {
        console.log(error)
      },
    )
  }, [])

  return (
      <div>
        <ul>
        {
          comments.map(comment => <li key={comment.id}>{comment.post}</li>)
        }
        </ul>
      </div>
  )
}

export default FetchComment