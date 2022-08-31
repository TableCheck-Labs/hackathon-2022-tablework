import styled from '@emotion/styled';
import { Spacing } from '@tablecheck/tablekit-theme';

import { PageWrapper } from 'Layouts';
import { pageTransitionEasing, slideUp } from 'styles';

export const HomeWrapper = styled(PageWrapper)`
  max-width: initial;
  animation: ${slideUp} ${pageTransitionEasing} 0.5s;
`;

export const DateSelector = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${Spacing.L4};
`;

export const DateSelectorButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${Spacing.L2};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceLow};
  }
`;

export const DateSelectorInfo = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${Spacing.L2} ${Spacing.L4};
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const TableWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: ${Spacing.L4};
`;

export const TableHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Cell = styled.div`
  width: calc(100% / 7);
  text-align: center;
  padding: ${Spacing.L2} 0;
  border-right: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-right: none;
  }
`;
