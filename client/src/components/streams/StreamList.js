import React, { useEffect, useState } from "react";
import streams from "../../apis/streams";
import { Link } from "react-router-dom";
import "./StreamList.css";

function StreamList() { 

    const [data, setData] = useState([]);
    const [condition, setCondition] = useState(null);

    function GetButton(props) {
        if(condition) {
            return <div>
            <Link to={`/streams/edit/${props.id}`}>
            <button className="btn btn-primary">
            Edit
            </button>
            </Link>
            <Link to={`/streams/delete/${props.id}`}>
            <button className="btn btn-danger">
            Delete
            </button>
            </Link>
            </div>;
        } else {
            return null;
        }
    }

    function GetData() {
        streams.get("/streams").then(function(response) { 
            setData(response.data);
         });
    }

    function GetCheck() {
        window.gapi.load("client:auth2", function() { 
            window.gapi.client.init({
                clientId: "396613227648-p7e00fpsfj0fcqbqd0jo703am2pg8cmv.apps.googleusercontent.com",
                scope: "email"
            }).then(function() { 
                const auth = window.gapi.auth2.getAuthInstance();
                setCondition(auth.isSignedIn.get());
                auth.isSignedIn.listen(function() { setCondition(auth.isSignedIn.get()) });
             });
         });
    }

    useEffect(function() {
        GetData();
        GetCheck();
    }, []);

    
    return <div>
            { data.map(function(item) { return <div className="row" key={item.id}>
                <div className="col-lg-1">
                <i className="fas fa-4x fa-camera"></i>
                </div>
                <div className="col-lg-7 body">
                <Link to={`/streams/${item.id}`}>
                <h5>{item.title}</h5>
                </Link>
                    <p>{item.description}</p>
                </div>
                <div className="col-lg-4">
                <GetButton id={item.id} />
                </div>
                <hr />
            </div> }) }
            <Link to="/streams/new" style={{ position: "absolute", right: "20px" }}>
            <button className="btn btn-primary">
                Create Stream
            </button>
            </Link>
               </div>;
 }

 export default StreamList;