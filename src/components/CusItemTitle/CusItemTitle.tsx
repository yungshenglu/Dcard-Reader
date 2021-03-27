import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AntNotification from '@C/AntNotification';
import CusPostModal from '@C/CusPostModal';
import useFetchPost from '@H/useFetchPost';
import { StyledItemTitle } from './style';


export function CusItemTitle({ content, id }: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [{ data, isLoading, isError }, refetch]: any = useFetchPost(id);

  useEffect(() => {
    if (isError) {
      AntNotification({
        message: '系統錯誤',
        description: '目前連線異常，請稍後再試。'
      });
    }
  }, [isError]);

  // Event handler
  const handleOpenModal = async () => {
    setModalVisible(true);
    await refetch();
  }

  const handleCloseModal = () => {
    setModalVisible(false);
  }

  // Render
  return (
    <>
      <StyledItemTitle onClick={handleOpenModal} margin>
        { content }
      </StyledItemTitle>
      <CusPostModal
        modalTitle={content}
        modalData={data}
        isLoading={isLoading}
        isError={isError}
        modalVisible={modalVisible}
        onCloseModal={handleCloseModal}
      />
    </>
  );
};

CusItemTitle.prototype = {
  content: PropTypes.string,
  id: PropTypes.number
};
