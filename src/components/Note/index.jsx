import { Container } from './styles'
import { Tag } from '../Tag'

import { useState } from 'react';

export function Note({ data, text, maxLength = 273, ...rest }) {
    const [exibirTextoCompleto, setExibirTextoCompleto] = useState(false);

    const handleToggleExibirTexto = () => {
        setExibirTextoCompleto(!exibirTextoCompleto);
    };

    const textoTruncado = text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

    return (
        <Container {...rest}>
            <h1>{data.title}</h1>

            <p title={text}>
                {exibirTextoCompleto ? text : textoTruncado}
                {text.length > maxLength && (
                    <button onClick={handleToggleExibirTexto}>
                        {exibirTextoCompleto ? 'Mostrar menos' : 'Leia mais'}
                    </button>
                )}
            </p>

            {data.tags && (
                <footer>
                    {data.tags.map((tag) => (
                        <Tag key={tag.id} title={tag.name} />
                    ))}
                </footer>
            )}
        </Container>
    );
}
