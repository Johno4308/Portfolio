import './index.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CharAnimation from '../CharAnimation'
import { Loader } from 'react-loaders'

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  const greetArray2 = 'i there,'.split("")
  const nameArray1 = 'Johnathan'.split("")
  const jobArray3 = 'Front End Developer'.split("")
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])


    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>

                    {/* setting up array chars with animations by calling animate char component and 
                    assign a unique number to each 1*/}
                    <span className={`${letterClass} _14`}>H</span>
                    <CharAnimation      
                    letterClass={letterClass}
                    strArray={greetArray2}
                    idx={15}
                    /> 
                    <br/>
                    <br/>
                    <span className={`${letterClass} _23`}>I</span>
                    <span className={`${letterClass} _24`}>'m</span>
                    <span> </span>
                    <CharAnimation 
                    letterClass={letterClass}
                    strArray={nameArray1}
                    idx={26}
                    /> 
                    <br />
                    <CharAnimation 
                    letterClass={letterClass}
                    strArray={jobArray3}
                    idx={35}
                    />  
                    <br />
                    </h1>
                    <h2>JavaSript | CSS | Html | C++</h2>
                    <h2>React | ThreeJS | Qt </h2>
                    <Link 
                      to="/contact" 
                      className='flat-button'>
                      CONTACT ME
                      </Link>
            </div>
            <div className='splash-effect'></div>
        </div> 
        <Loader type="ball-rotate" />
        </>
    )
}

export default Home