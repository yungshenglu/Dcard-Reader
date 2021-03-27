import PropTypes from 'prop-types';
import { StyledItemExcerpt } from './style';


export function CusItemExcerpt({ content }: any) {
  return (
    <StyledItemExcerpt>
      { content }...
    </StyledItemExcerpt>
  );
};

CusItemExcerpt.prototype = {
  content: PropTypes.string
};
