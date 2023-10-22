import React from 'react';
import {useEffect} from "react";
import axios from "axios";

function MentalHealthPage() {
    const getApi = async ()=> {
        axios.get("/mentalhealth").then((res)=>{console.log(res.data)});
      };
  
      useEffect(()=>{
        getApi();
      }, []);
    return (
        <div>
            <h1>Mental Health Page</h1>
            <p>Welcome to the Mental Health Page!</p>
        </div>
    );
}

export default MentalHealthPage;
