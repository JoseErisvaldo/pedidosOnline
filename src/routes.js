import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Logo from './Components/Logo'

import Home from './Page/Home'
import News from './Page/News'
import Category from './Page/Category'
import About from './Page/About'
import Erro from './Page/Erro'
import Order from './Page/Order'
import Detalhes from './Page/Detalhes'
import User from './Page/User'
import Carrinho from './Page/Carrinho'

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
                    <Route path="/pedidos" element={<Order/>} />
                    <Route path="/detalhes/:id" element={<Detalhes/>}/>
                    <Route path="/minha-conta" element={<User/>} />
                    <Route path="/carrinho" element={<Carrinho/>} />


                    <Route path='*' element={<Erro/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default RoutesApp