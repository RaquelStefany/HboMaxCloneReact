import './Home.css'

function LoginHome() {
    return (
        <main>
            <h1>
                Entrar
            </h1>
            <div id="form">
                <span>
                    Você tem uma conta da HBO Max?
                </span>
                <form>
                    <input type="email" name="email" id="emailForm" placeholder='Endereço de email' />
                    <input type="password" name="senha" id="senhaForm" placeholder='Senha' />
                    <div>
                        <button type="submit">
                            Entrar
                        </button>
                        <a href="">
                            Esqueceu a senha?
                        </a>
                    </div>
                </form>
                <div>
                    <span>
                        <hr />
                    </span>
                    <h3>
                        Ou
                    </h3>
                    <span>
                        <hr />
                    </span>
                </div>
                <div>
                    <span>
                        Você acessa a HBO Max por outra empresa, como um provedor de TV, de celular ou de internet?
                    </span>
                    <button>
                        Entrar como Provedor
                    </button>
                </div>
            </div>
            <span>
                Precisa de ajuda para entrar?
            </span>
        </main>
    )
}

export default LoginHome
