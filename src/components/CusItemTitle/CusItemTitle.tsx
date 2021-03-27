import { useState } from 'react';
import PropTypes from 'prop-types';
import CusPostModal from '@C/CusPostModal';
import useFetchPost from '@H/useFetchPost';
import { StyledItemTitle } from './style';


export function CusItemTitle({ content, id }: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [{ data, isLoading, error }, refetch]: any = useFetchPost(id)

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
        error={error}
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
