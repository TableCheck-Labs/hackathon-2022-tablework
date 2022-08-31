import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Spacing } from '@tablecheck/tablekit-theme';

import { PageWrapper } from 'Layouts';
import { pageTransitionEasing, slideUp } from 'styles';

export const HomeWrapper = styled(PageWrapper)`
  max-width: initial;
  animation: ${slideUp} ${pageTransitionEasing} 0.5s;
`;

export const Selectors = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${Spacing.L4};
`;

const SelectorButton = styled.button`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceLow};
  }
`;

export const DateSelector = styled.div`
  display: flex;
  align-items: center;
`;

export const DateSelectorButton = styled(SelectorButton)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${Spacing.L2};
`;

export const DateSelectorInfo = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${Spacing.L2} ${Spacing.L4};
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const TableWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: none;
  margin-top: ${Spacing.L4};
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Cell = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% / 7);
  justify-content: center;
  align-items: center;
  padding: ${Spacing.L2} 0;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-right: none;
  }
`;

export const ViewSelector = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
`;

export const ViewButton = styled(SelectorButton)<{
  active?: boolean;
}>`
  padding: 0 ${Spacing.L4};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  ${({ active, theme }) =>
    active &&
    css`
      background-color: ${theme.colors.primary};
      color: white;
    `};

  &:last-child {
    border-right: none;
  }
`;

export const StaffCell = styled(Cell)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Avatar = styled.div<{
  name: string;
}>`
  border-radius: 100%;
  background-image: ${({ name }) => `url('https://i.pravatar.cc/80?${name}')`};
  background-size: cover;
  width: 40px;
  height: 40px;
  margin-right: ${Spacing.L4};
`;
