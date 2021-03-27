import PropTypes from 'prop-types';
import { StyledEmpty } from './style';

export function AntEmpty({ description = 'No Data' }: any) {
  return <StyledEmpty description={description} />;
};

AntEmpty.propTypes = {
  description: PropTypes.string,
};
