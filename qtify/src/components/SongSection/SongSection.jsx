import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styles from "./SongSection.module.css"
import axios from "axios";
import Card from "../Card/Card"
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Tabs from "./../Tabs/Tabs";




export default function Section({title,data,type})
{   const [filterData,setFilterData] = useState(data);
    useEffect(()=>{
        setFilterData(data)
    },[data])
    return (
        <div>
            <div className={styles.header}>
        <h3>{title}</h3>
        </div>
        <div><Tabs setFilterData={setFilterData} filterData={filterData} data ={data}/></div>
        {filterData.length === 0 ? (
        <CircularProgress/>) :(
            <div className={styles.cardWrapper}>
                <Carousel data={filterData} renderComponent={(data)=> <Card data={data} type={type}/>}/>
            </div>
        ) }
        </div>
    )
}