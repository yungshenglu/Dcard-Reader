import PropTypes from 'prop-types';
import AntRow from '@C/AntRow';
import AntCol from '@C/AntCol';
import CusListTitle from '@C/CusListTitle';


export function Layout({ children }: any) {
  return (
    <AntRow justify="space-around" align="top">
      <CusListTitle />
      <AntCol md={14} lg={18}>
        { children }
      </AntCol>
    </AntRow>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
