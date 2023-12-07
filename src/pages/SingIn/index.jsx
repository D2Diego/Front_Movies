import { FiMail, FiLock } from 'react-icons/fi';

import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'


export function SingIn() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicações para acompanhar tudo que assiste</p>

                <h2>Faça seu login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail} />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock} />

                <Button title="Entrar" />

                <Link to="/register"> Criar Conta</Link>
            </Form>

            <Background />
        </Container>

    )
}