import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { IListItem } from '@I/list'; 
import AntTag from '@C/AntTag';
import CusItemTitle from '@C/CusItemTitle';
import CusItemExcerpt from '@C/CusItemExcerpt';
import { GENDER_COLOR } from '@U/hardcode';
import { AUserOutlined } from '@P/antd'
import { 
  StyledListItem,
  StyledAntAvatar,
  StyledAntBadge
} from './style';


export function CusListItem({
  id,
  title = '',
  excerpt = '',
  gender = '',
  forumName = '',
  topics = [],
  commentCount,
  divider = true
}: any) {


  const avatarColor = useMemo(() => {
    return GENDER_COLOR.find(item => item.key === gender)?.color;
  }, [gender]);
  
  const topicsLabelNode = useMemo(() => {
    return topics?.map((item: string) => (
      <AntTag color="#01324e">
        { item }
      </AntTag>
    ));
  }, [topics]);

  // Render
  return (
    <StyledListItem 
      key={id}
      divider={divider}
    >
      <CusItemTitle 
        content={title}
        id={id}
      />
      <CusItemExcerpt 
        content={excerpt} 
      />
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
      { topicsLabelNode }
    </StyledListItem>
  );
};

CusListItem.prototype = {
  id: PropTypes.number,
  title: PropTypes.string,
  digest: PropTypes.string,
  gender: PropTypes.string,
  forumName: PropTypes.string,
  topics: PropTypes.array,
  divider: PropTypes.bool
};
