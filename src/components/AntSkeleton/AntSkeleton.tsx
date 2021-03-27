import PropTypes from 'prop-types';
import { ASkeleton } from '@P/antd';


export function AntSkeleton({ ...props }: any) {
  return <ASkeleton {...props} />;
};

AntSkeleton.prototype = {
  props: PropTypes.object
};
