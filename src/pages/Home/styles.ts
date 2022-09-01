import styled from '@emotion/styled';
import { Spacing } from '@tablecheck/tablekit-theme';

import { Flex } from 'layouts';

export const HomeWrapper = styled(Flex)`
  justify-content: center;
  margin-top: ${Spacing.L8};

  a {
    text-decoration: none;
  }
`;

export const UserButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 300px;

  svg {
    width: 100%;
    height: 100%;
  }

  div {
    color: ${({ theme }) => theme.colors.text};
    margin-top: ${Spacing.L4};
  }
`;
