import React from "react";
import { Link } from "react-router-dom";
import streams from "../../apis/streams";

function StreamDelete(props) { 

   async function onDeleteStream() {
        await streams.delete(`/streams/${props.match.params.id}`).then(function(response) {
            if(response.request.status === 200) {
                props.history.push("/");
            }
        });
    }
    
    return <div style={{ textAlign: "center", marginTop: "30px" }}>
        <i className="far fa-7x fa-trash-alt"></i>
        <h1>Do you want to delete your stream?</h1>
        <button onClick={onDeleteStream} className="btn btn-danger">Delete</button>
        <Link to="/" className="btn btn-primary">Cancel</Link>
    </div>;
 }

 export default StreamDelete;