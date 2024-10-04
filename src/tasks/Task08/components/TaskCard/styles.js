// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: var(--github-graffiti);

  @media (min-width: 768px) {
    flex-flow: row wrap;
  }
`;

export const Card = styled.div`
  width: 100%;
  width: 310px;
  border: 1px solid var(--shuttle-grey);
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  @media (min-width: 768px) {
    width: 512px;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-flow: row wrap;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 150px;

  @media (min-width: 768px) {
    flex: 1;
    height: 100%;
    border-bottom: 1px solid var(--shuttle-grey);
  }
`;

export const Info = styled.div`
  padding: 10px;
  border-top: 1px solid var(--shuttle-grey);
  border-bottom: 1px solid var(--shuttle-grey);
  display: flex;
  flex-direction: column;
  gap: 5px;

  p {
    font-size: 1.3rem;
  }

  p:nth-child(1) {
    font-size: 1.8rem;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    flex: 1;
    border-top: none;
    border-left: 1px solid var(--shuttle-grey);
    justify-content: space-evenly;
  }
`;

export const Icons = styled.div`
  padding: 10px;
  border-bottom: 1px solid var(--shuttle-grey);
  display: flex;
  justify-content: space-evenly;

  svg {
    font-size: 2rem;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    border-left: 1px solid var(--shuttle-grey);
  }
`;

export const TaskSection = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;

  table {
    border-collapse: collapse;
    border: 1px solid var(--shuttle-grey);

    th,
    td {
      text-align: left;
    }

    th {
      background-color: var(--light-grey);
    }

    td {
      border-bottom: 1px solid #ccc;
    }

    input[type='checkbox'] {
      transform: scale(1.2);
      cursor: pointer;
    }
  }
`;
