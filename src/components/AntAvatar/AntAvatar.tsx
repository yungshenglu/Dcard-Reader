import PropTypes from 'prop-types';
import { AAvatar } from '@P/antd';


export function AntAvatar({ ...props }: any) {
  return <AAvatar {...props} />;
}

AntAvatar.prototype = {
  props: PropTypes.object
};
