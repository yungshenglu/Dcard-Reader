import PropTypes from 'prop-types';
import AntRow from '@C/AntRow';
import AntCol from '@C/AntCol';

export function Layout({ childrenMain, childrenRight }: any) {
  return (
    <AntRow gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="space-around" align="top">
      <AntCol className="gutter-row" span={18} offset={3}>
        { childrenMain }
      </AntCol>
      <AntCol className="gutter-row" span={1}>
        { childrenRight }
      </AntCol>
    </AntRow>
  );
}

Layout.propTypes = {
  childrenMain: PropTypes.node.isRequired,
  childrenRight: PropTypes.node,
};
