import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Spacing } from '@tablecheck/tablekit-theme';

export const TableWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: none;
  margin: ${Spacing.L4} 0;
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
  flex-shrink: 0;
  flex-direction: column;
  width: calc(100% / 7);
  justify-content: center;
  align-items: center;
  padding: ${Spacing.L2} 0;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
      color: white;

      span {
        color: #aaa;
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
  url: string;
}>`
  flex-shrink: 0;
  border-radius: 100%;
  background-image: ${({ url }) => `url('${url}')`};
  background-size: cover;
  width: 40px;
  height: 40px;
  margin: 0 ${Spacing.L4};
`;

export const GroupAvatar = styled(Avatar)`
  margin: 0 -${Spacing.L6};
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubtleText = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
  line-height: 16px;
`;
