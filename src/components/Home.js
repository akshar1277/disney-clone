import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Movies from './Movies'
import Recommend from './recommends'
import Originals from './Originals'
import Trending from './Trending'
import Viewers from './Viewers'
import db from '../firebase'
import {useDispatch} from "react-redux"
import {setMovies} from '../features/movie/movieSlice'
import {  useSelector } from "react-redux";









// function Home() {
//   const dispach=useDispatch();
//   let movies= [];

//   useEffect(()=>{
//     db.collection("movies").onSnapshot((snapshot)=>{
      
//       let tempMovies=snapshot.docs.map((doc)=>{
        
//         movies = [...movies, {id:doc.id,...doc.data()}];
//       })
//       console.log(tempMovies)
//       dispach(setMovies(tempMovies));
    
//     })

//   },[])
const Home = (props) => {
  const dispatch = useDispatch();
 
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, []);




  return (
     <Wrap>
    <Container>
       <ImgSlider/>
       <Viewers/>
       <Movies/>
       <Recommend/>
       <Originals/>
       <Trending/>
    </Container>
    </Wrap>
  )
}

export default Home

const Wrap=styled.div`
    background:url("/images/home-background.png") ;
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    top:0;
    left:0;
    reight:0;
    bottom:0;
    z-index:-1;
    overflow-x:hidden;
`
const Container=styled.main`
 
    min-height:calc( 100vh - 70px);
    padding:0 calc(3.5vw + 5px);
    position:relative;
    
    
    
  
`