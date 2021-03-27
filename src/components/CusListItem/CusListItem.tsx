import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { IListItem } from '@I/list'; 
import AntTag from '@C/AntTag';
import AntNotification from '@C/AntNotification';
import CusItemTitle from '@C/CusItemTitle';
import CusItemExcerpt from '@C/CusItemExcerpt';
import CusPostModal from '@C/CusPostModal';
import { GENDER_COLOR } from '@U/hardcode';
import { AUserOutlined } from '@P/antd'
import useFetchPost from '@H/useFetchPost';
import { 
  StyledListItem,
  StyledAntAvatar,
  StyledAntBadge,
  StyledBadgeBlock,
  StyledAvatarBadgeBlock
} from './style';


export function CusListItem({
  itemId,
  title = '',
  excerpt = '',
  gender = '',
  forumName = '',
  topics = [],
  commentCount,
  divider = true
}: IListItem) {
  const [modalVisible, setModalVisible] = useState(false);

  const [{ data, isLoading, isError }, refetch]: any = useFetchPost(itemId);

  const avatarColor = useMemo(() => {
    return GENDER_COLOR.find(item => item.key === gender)?.color;
  }, [gender]);
  
  const topicsLabelNode = useMemo(() => {
    return topics?.map((item: string, index: number) => (
      <AntTag 
        key={index}
        color="#01324e"
        style={{ marginBottom: '2px' }}
      >
        { item }
      </AntTag>
    ));
  }, [topics]);

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
      <StyledListItem 
        divider={divider}
        onClick={handleOpenModal}
      >
        <CusItemTitle 
          content={title}
          itemId={itemId}
        />
        <CusItemExcerpt 
          content={excerpt} 
        />
        <StyledBadgeBlock>
          { topicsLabelNode }
        </StyledBadgeBlock>
        <StyledAvatarBadgeBlock>
          <StyledAntAvatar 
            color={avatarColor}
            size="small"
            icon={<AUserOutlined />}
          />
          <StyledAntBadge 
            color="#01324e"
            text={forumName} 
          />
          <StyledAntBadge count={commentCount} />
        </StyledAvatarBadgeBlock>
      </StyledListItem>
      <CusPostModal
        modalTitle={title}
        modalData={data}
        isLoading={isLoading}
        isError={isError}
        modalVisible={modalVisible}
        onCloseModal={handleCloseModal}
      />
    </>
  );
};

CusListItem.prototype = {
  itemId: PropTypes.number,
  title: PropTypes.string,
  digest: PropTypes.string,
  gender: PropTypes.string,
  forumName: PropTypes.string,
  topics: PropTypes.array,
  divider: PropTypes.bool
};
