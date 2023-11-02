import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Logo from './Components/Logo'

import Home from './Page/Home'
import News from './Page/News'
import Category from './Page/Category'
import About from './Page/About'
import Erro from './Page/Erro'

function RoutesApp () {
    return(
        <div>

            <BrowserRouter>
                <Logo/>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/novidades' element={<News/>} />
                    <Route path='/categorias' element={<Category/>} />
                    <Route path='/sobre' element={<About/>} />


                    <Route path='*' element={<Erro/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default RoutesApp