import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonGroup } from '@tablecheck/tablekit-button-group';
import { Select } from '@tablecheck/tablekit-select';
import { BORDER_RADIUS, Spacing } from '@tablecheck/tablekit-theme';

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

export const SelectorSelect = styled(Select)`
  min-width: 180px;
  height: 42px;
`;

export const PeriodSelector = styled(ButtonGroup)`
  width: auto;
`;
