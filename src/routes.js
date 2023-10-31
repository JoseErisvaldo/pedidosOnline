import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Page/Home'
import Header from './Components/Header'
import Logo from './Components/Logo'

function RoutesApp () {
    return(
        <div>

            <BrowserRouter>
                <Logo/>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default RoutesApp