import React from 'react'
import wave from '../img/Emoji.png'
import me from '../img/header-img.svg'

function Content() {
  return (
    <div className='content'>
      <main>
        <div>
          <h1>Hi! <img src={wave} alt='wave' width={50}/></h1>
          <h1>I'm Élder Fausto</h1>
          <h1>Front-end developer</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed error explicabo nemo in? Doloribus quae illum quaerat nesciunt, commodi obcaecati?</p>
        </div>
        <div className='buttons'>
          <button className='btn me'>HIRE ME</button>
          <button className='btn projects'>SEE MY PROJECTS</button>
        </div>
      </main>
      <figure>
        <img src={me} alt='Élder Fausto' className='me-img' width={350}/>
        <div className='img-bg'></div>
      </figure>
    </div>
  )
}

export default Content