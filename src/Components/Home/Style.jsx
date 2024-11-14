import styled from "styled-components";

export const Home = styled.section`
  display: flex;
  height: 90vh;
  position: relative;
  overflow: hidden;
  align-items: center;

  h2 {
    font-weight: 400;
    font-size: 3rem;
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
    top: 3rem;
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
  width: 100rem;
  height: 70rem;
  border-radius: 50%;
  position: absolute;
  top: 98%;
  right: 0;
  left: 60%;
  transform: translateY(-50%);


  img {
    position: absolute;
    top: 3%;
  }
`;

export const SocialIcons = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  width: 10%;
  height: 20%;
  position: absolute;
  left: 28rem;
  bottom: 48rem;
  align-items: center;
  justify-content: space-around;

  svg {
    color: var(--color-bg);
    font-size: 2.2rem;
    cursor: pointer;
    transition: color 0.9s ease;

    &:hover {
      color: var(--color-text);
      opacity: 0.5;
    }
  }
`;
