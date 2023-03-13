import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 30rem;
  width: 30rem;
  gap: 1.5rem;
`;

export const InformationCards = styled.div`
  width: 36.125rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: row;
`;

export const Card = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};

  border-radius: 0.75rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin-top: 1rem;

  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary.light};
`;

export const Content = styled.div`
  margin-top: 2rem;
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
