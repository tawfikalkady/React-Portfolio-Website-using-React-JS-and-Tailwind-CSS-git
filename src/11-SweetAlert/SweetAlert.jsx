import { useEffect,useState } from "react";
import '../App.css'
import CoffeeCard from "./CoffeeCard";
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';


const SweetAlert = () => {
    const [coffees,setCoffees]=useState([])
    useEffect(() => {
        fetch('./products.json').then(res => res.json() ).then(data => setCoffees(data.products) )
    }, [])
    console.log(coffees)
    return (
        <>
         <h2>premium coffee for you!</h2>
         <div className='products'>
            {
                coffees.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee} /> )
            }
         </div>   
        </>
    );
};

export default SweetAlert;