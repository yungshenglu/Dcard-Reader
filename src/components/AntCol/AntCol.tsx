import PropTypes from 'prop-types';
import { ACol } from '@P/antd';

export function AntCol({ children, ...props }: any) {
  return <ACol {...props}>{children}</ACol>;
}

AntCol.prototype = {
  children: PropTypes.node,
  props: PropTypes.object
}
