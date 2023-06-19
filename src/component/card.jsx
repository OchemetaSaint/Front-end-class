import React, { useState,useEffect } from 'react'

const Card=() =>{
const[fooddata,setFoodData] = useState([])
// const [fooddataInfo, setFoodDataInfo] = useState()

// const[ toggle,settoggle]=useState(false)

const url = "https://free-food-menus-api-production.up.railway.app/burgers"

const getAllData = () =>{

    fetch(url)
    .then(res=>res.json())
    .then(res=> setFoodData(res))
}
getAllData()
// const getAllMyData=(id)=>{
//     consturl2= `https://free-food-menus-api-production.up.railway.app/burgers/${id}`
//     fetch(url2)
//     .then(res=>setFoodDataInfo(res))
// }

// const showtoggle =(id)=>{
//     settoggle(!toggle)
//     console.log(id)
//     getAllMyData(id)
// }

// console.log(fooddataInfo)

// useEffect(()=>(
//     getAllData(),
//     showtoggle()
// ))
  return (
    <div className='help'>
    
       
            {
                fooddata.map((props)=>(
                    <>
                    <div className='card'>
                    <main className='image'><img src={props.img} alt="" /></main>
                    <main className='write'>
                       <div className='count'>
                       {props.country}
                        </div>
                        <div className='name'>
                            <div className='itemname'><p>{props.name}</p></div>
                            <div className='price'><h4> &#8358; {props.price}</h4></div>
                        </div>
                        <div className='desc'>
                            <button className='love'>Buy</button>
                            <button className='love2'>Veiw</button>
                        </div>
                    </main>
                    </div>
                    </>
                ))
            }
        
       
    
    </div>
  )

}


export default Card