import PropTypes from 'prop-types';
import { StyledAntBacktop } from './style';


export function AntBacktop({ ...props }: any) {
  return <StyledAntBacktop {...props} />;
}

AntBacktop.prototype = {
  props: PropTypes.object
};
