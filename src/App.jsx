import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import NewsComp from '../NewsComp'

function App() {
  const [info,setInfo] = useState([]);
  
  axios
    .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=4366d23f24b04e2ca34d412f34070862')
    .get('https://newsapi.org/v2/everything?q=tesla&from=2024-05-24&sortBy=publishedAt&apiKey=4366d23f24b04e2ca34d412f34070862')
    .then((response)=>{
      console.log(response.data.articles);
      setInfo(response.data.articles);
    })
    .catch((err)=>{
      console.log(err);
    })

    const component = info.map((element) => {
      return <NewsComp data={element}/>
    })

  // async function getdata(){
  //   const fetching = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=4366d23f24b04e2ca34d412f34070862")
  //   console.log(fetching);
  //   const result = await fetching.json();
  //   console.log(result);

  // }

  // getdata();


  return (
    <>
    {component}
    </>
  )
}

export default App
