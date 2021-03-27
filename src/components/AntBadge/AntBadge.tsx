import PropTypes from 'prop-types';
import { ABadge } from '@P/antd';


export function AntBadge({ ...props }: any) {
  return <ABadge {...props} />;
}

AntBadge.prototype = {
  props: PropTypes.object
};
