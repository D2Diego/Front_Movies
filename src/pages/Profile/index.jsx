import { Container, Avatar, Form } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiArrowLeft, FiCamera, FiMail, FiUser, FiLock } from "react-icons/fi";

import { Link } from 'react-router-dom'

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/"><FiArrowLeft /> Voltar</Link>
            </header>


            <Form>
                <Avatar>
                    <img src="https://github.com/reiarthur.png"
                        alt="Foto do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input type="file"
                            id="avatar" />
                    </label>
                </Avatar>

                <Input classname="teste" placeholder="Nome" type="text" icon={FiUser} />
                <Input placeholder="E-mail" type="text" icon={FiMail} />
                <Input placeholder="Senha atual" type="password" icon={FiLock} />
                <Input placeholder=" Nova senha" type="password" icon={FiLock} />

                <Button title='Salvar' />
            </Form>


        </Container>
    )
}