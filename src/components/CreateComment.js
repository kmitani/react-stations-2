import React, {useState} from 'react'
import baseUrl from '../libs/Constants.js'
import { useParams } from 'react-router-dom';

const CreateComment = () => {
    const params = useParams();
    const [formData, setFormData] = useState({ post: '' });
    const locationApi = "/threads/" + params.id + "/posts";

    const handleSubmit = (event) => {
        var request = JSON.stringify(formData);
        console.log(request);
        event.preventDefault();
        fetch(baseUrl + locationApi, {
          method:"POST",
          headers: {
              'Content-Type': 'application/json'
        },
        body: request
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            window.location.reload();
        })
        .then(error => {console.log(error)})
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value})
    };

    return (
        <div>
            <h2>コメント新規作成</h2>
            <input type="text" name="post" value={formData.post} onChange={handleChange} />
            <button type="submit" onClick={handleSubmit} >Submit</button>
        </div>
    )
}

export default CreateComment