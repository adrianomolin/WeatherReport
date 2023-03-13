import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: ;
  justify-content: center;
  flex-direction: row;
  gap: 0.5rem;
`;

export const Card = styled.div`
  width: 9.125rem;
  padding: 1rem 0.75rem;
  background: ${({ theme }) => theme.colors.secondary.dark};
  border-radius: 0.375rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;

  gap: 0.75rem;
`;

export const Icon = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 0.75rem;
`;

export const Info = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: row;
  gap: 0.25rem;

  font-weight: 700;
  font-size: 1.125rem;
`;

export const Label = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.secondary.light};
`;
