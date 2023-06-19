
import './App.css'
import Card from './component/card.jsx'
// import Detail from './component/detail.jsx'

const App =()=>{
 
   
  return (
      <div className='container'>
       <main className='header'>
        <section>
        <div className='left'>
        <div className='head'>
          <div className='logo'><img src="./src/assets/download.png" alt=""/>Ochemeta</div>
            <ul className='list'>
              <li>Home</li>
              <li>Offers</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
          <div className='Signup'><button className='love2'>Signup</button></div>
        </div>
        <div  className="headline">
        <h3>Snack on <span className='color'>Delicious</span> and <span className='color'> Satisfying</span> burgers at low price</h3>
        </div>
        <div className='btn'>
        <button className='Btn3'>Order Now</button>
        </div>
        </div>
        </section>
       </main>
       <main className='content'>
        <Card/>
        </main> 
        {/* <Detail/>     */}
      </div>
    
  )
}


export default App
