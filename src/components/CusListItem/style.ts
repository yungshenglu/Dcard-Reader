import styled from 'styled-components';
import AntAvatar from '@C/AntAvatar';
import AntBadge from '@C/AntBadge';
import { StyledItemProps } from '@I/style';


export const StyledListItem = styled.div<StyledItemProps>`
  backgroud: #FFFFFF;
  border-bottom: ${(prop) => prop.divider ? '1px solid #CCC' : 'none'};
  cursor: pointer;
  padding: 20px;
`;

export const StyledAntAvatar = styled(AntAvatar)`
  background-color: ${(props) => props.color};
  margin-right: 10px;
`;

export const StyledAntBadge = styled(AntBadge)`
  margin-right: 10px;
`;

export const StyledBadgeBlock = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const StyledAvatarBadgeBlock = styled.div`
  widthL 100%;
`;
