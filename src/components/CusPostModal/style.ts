import styled from 'styled-components';
import AntAvatar from '@C/AntAvatar';
import AntTag from '@C/AntTag';
import { StyledItemTitleProps } from '@I/style';

export const StyledItemTitle = styled.div<StyledItemTitleProps>`
  background: transparent;
  color: #000;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.1;
  width: 100%;
  margin: 0 0 ${(props) => props.margin ? '0.75rem' : '0'};
  padding: 0;
`;

export const StyledAvatarTitle = styled.div`
  min-height: 35px;
  vertical-align: middle;
`;

export const StyledAvatarTitleText = styled.span`
  display: inline-block;
  font-size: 0.9rem;
  font-weight: normal;
  vertical-align: middle;
  white-space: normal;
`;

export const StyledAntAvatar = styled(AntAvatar)`
  background-color: ${(props) => props.color};
  margin-right: 10px;
`;

export const StyledAntTag = styled(AntTag)`
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const StyledTagTimestampBlock = styled.div`
  margin-bottom: 10px;
`;
