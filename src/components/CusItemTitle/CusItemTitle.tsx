import PropTypes from 'prop-types';
import { StyledItemTitle } from './style';


export function CusItemTitle({ content, itemId }: any) {
  // Render
  return (
    <StyledItemTitle margin>
      { content }
    </StyledItemTitle>
  );
};

CusItemTitle.prototype = {
  content: PropTypes.string,
  itemId: PropTypes.number
};
