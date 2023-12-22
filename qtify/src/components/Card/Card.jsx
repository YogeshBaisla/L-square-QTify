import React from "react";
import styles from "./Card.module.css"
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import { Link } from "@mui/material";


export default function Card({data,type}){
    const getCard = (type)=>{
        switch(type){
            case "song":{
                const {image,likes,title} = data;
                return (
                    <div className={styles.wrapper}>
                    <div className={styles.card}>
                    <img src={image} alt="song" loading="lazy"/>
                    <div className={styles.banner}>
                    <div className={styles.pill}>
                    <p>{likes} Likes</p>
                    </div>
                    </div>
                    </div>
                    <div className={styles.titleWrapper}>
                    <p>{title}</p>
                    </div>
                    </div>)
            }
            case "album":{
                const {image,title,follows,songs,slug} = data;
                return (
                    <Tooltip title={`${songs.length} songs`} placement="top" arrow>
                    <Link to="/">    
                    <div className={styles.wrapper}>
                    <div className={styles.card}>
                    <img src={image} alt="song" loading="lazy"/>
                    <div className={styles.banner}>
                    <Chip label={`${follows} Follows`} size="small" className={styles.chip}/>
                    </div>
                    </div>
                    <div className={styles.titleWrapper}>
                    <p>{title}</p>
                    </div>
                    </div>
                    </Link>
                    </Tooltip>
                    )
            }
            default : return <></>
        }
    } 
    return getCard(type);
}