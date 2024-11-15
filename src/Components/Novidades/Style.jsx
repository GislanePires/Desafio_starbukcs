import styled from "styled-components";

export const Novidades = styled.section`

padding: 0 3% 0 4%;
display: flex;
height: 100vh;
align-items: center;
justify-content: center;
background-color: var(--color-novidades);
`;

export const NovidadesText = styled.article`
width: 45%;
height: 45%;
display: flex;
flex-direction: column;
justify-content: space-around;
color: var(--color-bg);
`;
export const Titles = styled.article`
    h2{
        font-size: 1.5rem;
    }
    h3{
        font-weight: 300;
        font-size: 3rem;

    }
`;

export const Imagem = styled.img`
 width: 50%;
 height: 50%;
`;