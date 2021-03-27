import PropTypes from 'prop-types';
import { ANotification } from '@P/antd';


export function AntNotification({ ...props }: any) {
  return ANotification.error({
    message: props.messages,
    description: props.description
  })
};

AntNotification.prototype = {
  props: PropTypes.object
};
