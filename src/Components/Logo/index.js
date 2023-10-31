import logo from '../../img/Logo/Vector.png'
import './index.css'
function Logo () {
    return(
        <div className='logo'>
            <img src={logo} alt='Logo' />
            <h2>PedidosOnline</h2>
        </div>
    )
}

export default Logo