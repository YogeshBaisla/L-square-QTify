import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styles from "./Section.module.css"
import axios from "axios";
import Card from "./../Card/Card"
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";




export default function Section({title,data,type})
{
    const [carouselToggle,setCarouselToggle] = useState(true);
    const handleToggle = () => {
        setCarouselToggle((prevState)=>!prevState);
    }
    return (
        <div>
            <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>{!carouselToggle ? "Collapse All" : "Show All"}</h4>
            </div>
        {data.length === 0 ? (
        <CircularProgress/>) :(
            <div className={styles.cardWrapper}>
            {!carouselToggle ? (
                <div className={styles.wrapper}>
                    {data.map((ele)=>(
                        <Card data={ele} type={type} />
                    ))}
                </div>
            ) : (
                <Carousel data={data} renderComponent={(data)=> <Card data={data} type={type}/>}/>
                )

            }
            </div>
        ) }
        </div>
    )
}