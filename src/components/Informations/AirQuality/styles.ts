import styled from 'styled-components';

export const Quality = styled.div`
  margin-bottom: 2rem;
`;

export const Rate = styled.div`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.green['200']};
  text-align: center;
  margin-bottom: 0.25rem;
`;

export const Rating = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Number = styled.div`
  color: ${({ theme }) => theme.colors.green['200']};
  font-size: 0.875rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.125rem;
`;

export const Label = styled.div`
  font-size: 0.75rem;
  text-align: center;
`;
