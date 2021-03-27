import PropTypes from 'prop-types';
import AntRow from '@C/AntRow';
import AntCol from '@C/AntCol';

export function Layout({ children }: any) {
  return (
    <AntRow justify="space-around" align="top">
      <AntCol span={18}>
        { children }
      </AntCol>
    </AntRow>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
