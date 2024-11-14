import styled from "styled-components";

export const Home = styled.section`
  display: flex;
  height: 100vh;
  position: relative;
  overflow: hidden;
  align-items: center;

  h2 {
    font-weight: 400;
  }

  span {
    font-weight: 700;
    color: var(--color-green);
    font-size: 3.2rem;
  }
  p {
    font-weight: 400;
    font-size: 1.4rem;
  }
`;
export const ContainerText = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 70vh;
  justify-content: space-around;

  figure {
    display: flex;
    justify-content: space-around;
    width: 35rem;
    position: relative;
    left: 22rem;
    top: 5rem;
    transition: all 0.8s ease;

    img {
        &:hover {
            cursor: pointer;
            transform: translateY(-8px) rotate(18deg);
            
        }

    }

  }
`;

export const ContainerBigCup = styled.section`
  width: 100%;
`;
export const BgCup = styled.div`
  background-color: var(--color-yellow);
  width: 45rem;
  height: 45rem;
  border-radius: 50%;
  position: absolute;
  top: 92%;
  right: 0;
  left: 60%;
  transform: translateY(-50%);

  img {
    position: absolute;
    top: -16%;
  }
`;
