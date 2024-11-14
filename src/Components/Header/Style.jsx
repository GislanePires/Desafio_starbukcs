import styled from "styled-components";

export const Header = styled.header`
display: flex;
align-items: center;
/* background-color: green; */
width: 100%;

nav{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
}

ul {
    width: 50%;
    display: flex;
    justify-content: space-around;
    li {
        /* background-color: blue; */
        color: var(--color-text);
        text-decoration: none;
        list-style: none;


        &:hover {
            color: var(--color-novidades);
        }

    }
}

`;