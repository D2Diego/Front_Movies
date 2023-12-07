import { Container } from './styles'

export function Textarea({ ...rest }) {
    return (
        <Container>
            <textarea name="" id="" cols="30" rows="10" {...rest}></textarea>
        </Container>
    )
}