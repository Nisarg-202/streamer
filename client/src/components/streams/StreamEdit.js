import React, { useEffect, useState } from "react";
import streams from "../../apis/streams";

function StreamEdit(props) { 

    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);

    function onTitleChange(e) {
        setTitle(e.target.value);
    }

    function onDescriptionChange(e) {
        setDescription(e.target.value);
    }

   async function onFormSubmit(e) {
        e.preventDefault();
       await streams.patch(`/streams/${props.match.params.id}`, {
            title: title,
            description: description
        }).then(function(response) {
                if(response.request.status === 200) {
                    props.history.push("/");
                } 
        });
    }

    function GetPastDetails() {
        streams.get(`/streams/${props.match.params.id}`).then(function(response) {
            setTitle(response.data.title);
            setDescription(response.data.description); 
        });
    }
 
    useEffect(function() {
        GetPastDetails()
    }, []);

    return <form onSubmit={onFormSubmit} className="container">
    <label htmlFor="title">Enter Title</label>
    <input id="title" onChange={onTitleChange} autoComplete="off" value={title} className="form-control" type="text" required />
    <label htmlFor="description">Enter Description</label>
    <input id="description" onChange={onDescriptionChange} autoComplete="off" value={description} className="form-control" type="text" required />
    <button style={{ marginTop: "20px" }} className="btn btn-lg btn-primary" type="submit">Submit</button>
    </form>;
 }

 export default StreamEdit;