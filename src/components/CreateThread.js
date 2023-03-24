import React, {useState} from 'react'
import baseUrl from '../libs/Constants.js'
import { useHistory } from 'react-router-dom';

const CreateThread = () => {

    const [formData, setFormData] = useState({ title: '' });
    const locationApi = "/threads";
    const history = useHistory();

    const handleSubmit = (event) => {
        console.log(formData.title)
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
            history.push('/');
        })
        .then(error => console.log(error))
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value})
    };

    return (
        <div>
            <h2>スレッド新規作成</h2>
            <input type="text" name="title" value={formData.title} onChange={handleChange} />
            <button type="submit" onClick={handleSubmit} >Submit</button>
            <a href="/">Topに戻る</a>
        </div>
    )
}

export default CreateThread