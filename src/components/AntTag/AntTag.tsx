import PropTypes from 'prop-types';
import { ATag } from '@P/antd';


export function AntTag({ children, style, color }: any) {
  return (
    <ATag style={style} color={color}>
      {children}
    </ATag>
  );
};

AntTag.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  color: PropTypes.string,
};
