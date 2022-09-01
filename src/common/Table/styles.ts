import styled from '@emotion/styled';
import { Spacing } from '@tablecheck/tablekit-theme';

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
