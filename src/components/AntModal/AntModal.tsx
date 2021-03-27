import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { AModal } from '@P/antd';
import AntEmpty from '@C/AntEmpty';
import AntSkeleton from '@C/AntSkeleton';


export function AntModal({ 
  children, 
  title = '',
  visible = false,
  isLoading = true,
  isError = false,
  onCancel
}: any) {
  const modalContent = useMemo(() => {
    return !isError
      ? isLoading
        ? <AntSkeleton active />
        : children
      : <AntEmpty />;
  }, [isLoading, isError, children]);
  
  // Render
  return (
    <AModal
      title={title}
      visible={visible}
      footer={null}
      destroyOnClose={true}
      centered={true}
      width={600}
      onCancel={onCancel}
      style={{
        whiteSpace: 'pre-line'
      }}
    >
      { modalContent }
    </AModal>
  );
};

AntModal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  visible: PropTypes.bool,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  onCancel: PropTypes.func
};
