import { FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';

import { Container, Form, Background } from './styles'
import { Input } from '../../components/input'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'

export function SingUp() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicações para acompanhar tudo que assistir</p>

                <h2>Crei sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser} />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail} />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock} />

                <Button title="Cadastrar" />

                <Link to="/">
                    <FiArrowLeft className='arrow-icon' /> Voltar para login
                </Link>
            </Form>

            <Background />
        </Container>

    )
}