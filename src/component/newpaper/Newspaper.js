import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import News from '../news/News';

const Newspaper = () => {
    const [articles,setarticles]=useState([]);
    useEffect(()=>{
        fetch('http://newsapi.org/v2/everything?q=apple&from=2021-09-28&to=2021-09-28&sortBy=popularity&apiKey=b2664cd7a1bb49a6a4abb207d0e3b913')
        .then(res =>res.json())
        .then(data =>setarticles(data.articles))

    },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        { articles.map(article =>  <Grid item xs={2} sm={4} md={3} >
           <News article={article}></News>
            </Grid>
           

        )
          
        }
      </Grid>
    </Box>
    );
};

export default Newspaper;