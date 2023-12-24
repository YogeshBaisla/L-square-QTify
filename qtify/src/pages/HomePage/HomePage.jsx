import React from "react";
import { useOutletContext } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import styles from "./HomePage.module.css"
import SongSection from "./../../components/SongSection/SongSection";

export default function HomePage(){
    const {data} = useOutletContext();
    const {topAlbums,newAlbums,songs} = data;
    return(
        <>
        <Hero/>
        <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album"/>
        <Section title="New Albums" data={newAlbums} type="album"/>
        <SongSection title="Songs" data={songs} type="song"/>
        </div>
        </>
    )

}