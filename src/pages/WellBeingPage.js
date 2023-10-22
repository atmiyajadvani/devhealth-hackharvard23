import React from 'react';
import {useEffect} from "react";
import axios from "axios";

function WellBeingPage() {
    const getApi = async ()=> {
        axios.get("/wellbeings").then((res)=>{console.log(res.data)});
      };
  
      useEffect(()=>{
        getApi();
      }, []);
    return (
        <div>
            <h1>Well-Being Page</h1>
            <p>This is a simple React page for well-being.</p>
        </div>
    );
}

export default WellBeingPage;
