import './Home.css'
import logoMenu from '../../assets/img/logoMenu.png'
import { HiMenu } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai';

function MenuHome() {
    return (
        <nav>
            <div>
                <a href="">
                    <HiMenu className='icon' />
                </a>
                <a href="">
                    Filmes
                </a>
                <a href="">
                    Séries
                </a>
            </div>
            <div>
                <img src={logoMenu} alt="Logo HBO" />
            </div>
            <div>
                <a href="">
                    <AiOutlineSearch className='icon' />
                </a>
                <a href="">
                    Entrar
                </a>
                <a href="" id='btnAssinar'>
                    Assinar
                </a>
            </div>
        </nav>
    )
}

export default MenuHome