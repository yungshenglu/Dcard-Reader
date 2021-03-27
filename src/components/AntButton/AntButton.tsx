import PropTypes from 'prop-types';
import { AButton } from '@P/antd';

export function AntButton({
  children,
  onClick = () => {},
  size = 'middle',
  shape = '',
  type = 'default',
  disabled = false,
  loading = false,
  block = false,
  icon,
  style = {},
}: any) {
  return (
    <AButton
      block={block}
      onClick={onClick}
      size={size}
      type={type}
      loading={loading}
      disabled={disabled}
      icon={icon}
      style={style}
    >
      {children}
    </AButton>
  );
};

AntButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.string,
  shape: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  block: PropTypes.bool,
  icon: PropTypes.node,
  style: PropTypes.object
};
