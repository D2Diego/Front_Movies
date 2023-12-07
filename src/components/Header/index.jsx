import { Container, Profile } from "./styles";


export function Header({ icon: Icon, ...rest }) {
    return (
        <Container>
            <h1>RocketMovies</h1>

            {Icon && <Icon size={20} />}
            <input {...rest}
                placeholder="Pesquisar pelo título" />

            <Profile>
                <div>
                    <strong>Diego Marques</strong>
                    <span>sair</span>
                </div>
                <img src="https://github.com/reiarthur.png"
                    alt=" Foto do usuário" />

            </Profile>
        </Container>
    )
}