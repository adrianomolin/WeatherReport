import styled from 'styled-components';

export const Container = styled.div`
  width: 36.125rem;
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.colors.background};

  padding: 2.5rem;

  display: flex;
  align-items: center;
  flex-direction: row;

  gap: 0.75rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const Title = styled.p`
  font-size: 0.875rem;
  text-align: center;

  margin-bottom: 1rem;
`;

export const Icon = styled.img`
`;

export const Temperature = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
`;
