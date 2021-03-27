import PropTypes from 'prop-types';
import { ARow } from '@P/antd';

export function AntRow({ children, ...props }: any) {
  return <ARow {...props}>{children}</ARow>;
};

AntRow.prototype = {
  children: PropTypes.node,
  props: PropTypes.object
};
