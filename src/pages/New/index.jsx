import { Container, Blackboard } from './styles'

import { FiArrowLeft } from "react-icons/fi";

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/Noteitem'
import { Section } from '../../components/Section'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Link to='/'> <FiArrowLeft /> Voltar</Link>
                <h1>Novo Filme</h1>
                <Section>
                    <div>
                        <Input placeholder="Título" />
                        <Input placeholder="Sua nota de (0 a 5)" />
                    </div>

                    <Textarea placeholder="Observações" />
                </Section>

                <Section title="Marcadores">
                    <Blackboard>
                        <NoteItem value="react" />
                        <NoteItem isNew placeholder="Nova tag" />
                    </Blackboard>
                </Section>

                <div>
                    <Button to='/' title="Excluir filme" />
                    <Button title="Salvar alteração" />
                </div>



            </main>
        </Container>
    )
}