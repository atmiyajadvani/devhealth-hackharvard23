import React from 'react';
import {useEffect} from "react";
import axios from "axios";

function GoalsPage() {
    const getApi = async ()=> {
        axios.get("/goals").then((res)=>{console.log(res.data)});
      };
  
      useEffect(()=>{
        getApi();
      }, []);
    return (
        <div>
            <h1>My Goals</h1>
            <ul>
                <li>Goal 1</li>
                <li>Goal 2</li>
                <li>Goal 3</li>
            </ul>
        </div>
    );
}

export default GoalsPage;
