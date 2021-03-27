import { useMemo } from 'react';
import PropTypes from 'prop-types';
import AntModal from '@C/AntModal';
import AntSkeleton from '@C/AntSkeleton';
import { AUserOutlined } from '@P/antd'
import { GENDER_COLOR } from '@U/hardcode';
import { 
  StyledItemTitle, 
  StyledAvatarTitle, 
  StyledAvatarTitleText,
  StyledAntAvatar,
  StyledAntTag
} from './style';

export function CusPostModal({ 
  modalTitle,
  modalData,
  isLoading = true,
  error,
  modalVisible = false,
  onCloseModal,
}: any) {
    const avatarColor = useMemo(() => {
      return GENDER_COLOR.find(item => item.key === modalData?.gender)?.color;
    }, [modalData]);
    
    const avatarTitleNode = useMemo(() => {
      return isLoading
        ? <AntSkeleton 
            active 
            avatar={{ size: 'small' }} 
            paragraph={false} 
            title={false}
          />
        : <StyledAntAvatar 
            color={avatarColor}
            size='small'
            icon={<AUserOutlined />}
          />;
      }, [isLoading, avatarColor]);

    const avatarTitle = useMemo(() => {
      return `
        ${modalData?.anonymousSchool 
          ? '匿名'
          : modalData?.anonymousDepartment
            ? modalData?.school
            : `${modalData?.school}${modalData?.department}`
        }
      `;
    }, [modalData]);

    const dateTimeString = useMemo(() => {
      const isoDateTime = new Date(modalData?.createdAt);
      return `${isoDateTime.toLocaleDateString('zh-Hans-CN')} ${isoDateTime.toLocaleTimeString()}`;
    }, [modalData]);

    // Render
    return (
      <AntModal
        title={
          <StyledItemTitle margin={false}>
            <StyledAvatarTitle>
              { avatarTitleNode }
              <StyledAvatarTitleText>
                { avatarTitle }
              </StyledAvatarTitleText>
            </StyledAvatarTitle>
            { modalTitle }
          </StyledItemTitle>
        }
        visible={modalVisible}
        isLoading={isLoading}
        error={error}
        onCancel={onCloseModal}
      >
        <div>
          <StyledAntTag color="#01324e">
            {modalData?.forumName}
          </StyledAntTag>
          { dateTimeString }
        </div>
        { modalData?.content }
      </AntModal>
    );
}

CusPostModal.prototype = {
  modalTitle: PropTypes.node,
  modalData: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.any,
  modalVisible: PropTypes.bool,
  onCloseModal: PropTypes.func
};
