import React, { useEffect, useState, useRef } from "react";
import flv from "flv.js";
import streams from "../../apis/streams";

function StreamShow(props) { 

    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const videoRef = useRef(null);

   async function GetData() {
        await streams.get(`/streams/${props.match.params.id}`).then(function(response) {
            setTitle(response.data.title);
            setDescription(response.data.description)            
        });
    }

    function GetMediaPlayer() {
        const flvPlayer = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${props.match.params.id}.flv`
        });
        flvPlayer.attachMediaElement(videoRef.current);
            flvPlayer.load();
    }
  
    useEffect(function() {
        GetData();
        GetMediaPlayer();
    }, []);

    return <div>
            <video ref={videoRef} style={{ width: "100%" }} controls />
            <h1>{title}</h1>
            <h5>{description}</h5>
    </div>;
 }

 export default StreamShow;