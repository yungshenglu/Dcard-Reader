import PropTypes from 'prop-types';
import { 
  StyledCusListTitle,
  StyledCusListTitleText
} from './style'


export function CusListTitle({ ...props }: any) {
  return (
    <StyledCusListTitle>
      <StyledCusListTitleText>
        Dcard 熱門文章
      </StyledCusListTitleText>
    </StyledCusListTitle>
  );
};

CusListTitle.prototype = {
  props: PropTypes.object
};
