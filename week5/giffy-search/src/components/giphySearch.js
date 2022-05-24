import { useEffect, useState } from "react";

export default function GiphySearch(props){
    const[imgSrc, setImgSrc] = useState("")
    const [alt, setAlt] = useState("")
    const userInput = props.render

    useEffect( ()=> {
        getFetch(userInput)
    }, [userInput])


    const giphSearch = ()=>{
        
        let loadingWait = document.createElement("h3")
        loadingWait.textContent = "Loading Please Wait..."
     
        getFetch(userInput);
    }

    const getFetch = (search) => {
        const apiKey = '7NbPbxiQeLkYqHzXjwpWIOb5DR6IdHbl'
        fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(search)}&api_key=${apiKey}`)
  
  .then(res => res.json())
          .then(res => {
            var count = 0
            res.data.forEach(()=>{count++})
            if (count !== 0){
               const randomGiphy = Math.floor(Math.random() * count + 1)
             setImgSrc(res.data[randomGiphy].images.original.url)
             setAlt(res.data[randomGiphy].title)
            }
            else if (count === 0){
              const zeroImg = document.createElement("h2")
              zeroImg.textContent = "Search not found, Try again!"
             
            }
          })
    }
    
 return (
        <div className="giphyBox">
          <div className="giphy">
         
            <input id="galaxy" className="searchBox" type = "text" placeholder="What are you looking for?"></input>
            <button className='submitButton' onClick = {() =>{giphSearch()}}>Search</button>
          </div>
          <div>
            <img src={imgSrc} alt= {alt}></img>
          </div>
        </div>
    )
}