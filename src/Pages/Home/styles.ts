import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonGroup } from '@tablecheck/tablekit-button-group';
import { Select } from '@tablecheck/tablekit-select';
import { BORDER_RADIUS, Spacing } from '@tablecheck/tablekit-theme';

import { PageWrapper } from 'Layouts';
import { pageTransitionEasing, slideUp } from 'styles';

export const Flex = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${Spacing.L4};
`;

export const HomeWrapper = styled(PageWrapper)`
  max-width: initial;
  animation: ${slideUp} ${pageTransitionEasing} 0.5s;
`;

export const SelectorsWrapper = styled.div`
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

export const DateSelectorButton = styled(SelectorButton)<{
  isLeft?: boolean;
}>`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${Spacing.L2};
  ${({ isLeft }) =>
    isLeft
      ? css`
          border-top-left-radius: ${BORDER_RADIUS}px;
          border-bottom-left-radius: ${BORDER_RADIUS}px;
        `
      : css`
          border-top-right-radius: ${BORDER_RADIUS}px;
          border-bottom-right-radius: ${BORDER_RADIUS}px;
        `};
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
  border-radius: 8px;
  overflow: hidden;
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

export const Cell = styled.div<{
  color?: string;
}>`
  display: flex;
  flex-direction: column;
  width: calc(100% / 7);
  justify-content: center;
  align-items: center;
  padding: ${Spacing.L2} 0;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  ${({ color }) => `background-color: ${color}`};

  &:last-child {
    border-right: none;
  }
`;

export const SelectorSelect = styled(Select)`
  min-width: 180px;
  height: 42px;
`;

export const VenueSelector = styled(Select)``;
export const ViewSelector = styled(Select)``;

export const PeriodSelector = styled(ButtonGroup)`
  width: auto;
`;

export const PeriodButton = styled(SelectorButton)<{
  active?: boolean;
}>`
  padding: 0 ${Spacing.L4};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  ${({ active, theme }) =>
    active &&
    css`
      background-color: ${theme.colors.primary};
      color: white;

      &:hover {
        background-color: ${theme.colors.primary};
      }
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
