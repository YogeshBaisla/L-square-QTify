import React, { useEffect } from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {fetchfilters} from "./../../api/api"



export default function CustomTabPanel({setFilterData,filterData,data}) {
    const [value, setValue] = useState('all');
    const [genre,setGenre] = useState([]);
    const generateGenre = async()=>{
        let response = await fetchfilters()
        setGenre(response.data)
    }
    useEffect(()=>{
        generateGenre()
    },[])
  const handleChange = (event, newValue) => {
    
    if(newValue != 'all'){
    setFilterData(data.filter((ele)=>{
        if (ele.genre.key === newValue){
            return true;
            }
            else{
            return false;
            }
    }))}
    else{
        setFilterData(data)
    }
    setValue(newValue);
  };
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  textColor="#ffffff"
   TabIndicatorProps={{
    style: {
      backgroundColor: "#34c94b"
    }
  }}>
    <Tab key='all' value='all' label='All'/>
    {genre.map((ele)=>{
        return (<Tab key={ele.key} value={ele.key} label={ele.label}/>) 
})}
      </Tabs>
</Box>
  );
}