import PropTypes from 'prop-types';
import AntEmpty from '@C/AntEmpty';
import AntSkeleton from '@C/AntSkeleton';
import CusListItem from '@C/CusListItem';
import { StyledList } from './style';


export function CusList({ listData = [], isLoading, lastItemRef }: any) {
  const listLength = listData?.length;

  // Render
  return (
    <StyledList>
      {
        listData?.length === 0
        ? isLoading
          ? <AntSkeleton active />
          : <AntEmpty />
        : listData.map((item: any, index: number) => {
          if (index === listLength - 1) {
            return (
              <>
                <div 
                  key={`${item.id}${index}`}
                  ref={lastItemRef} 
                  data-id={item.id}
                >
                  <CusListItem 
                    itemId={item.id}
                    title={item.title} 
                    excerpt={item.excerpt}
                    gender={item.gender}
                    forumName={item.forumName}
                    topics={item.topics}
                    commentCount={item.commentCount}
                    divider={index !== listLength - 1}
                  />
                  { 
                    isLoading 
                    ? <AntSkeleton active/> 
                    : null 
                  }
                </div>
              </>
            )
          } else {
            return (
              <div key={`${item.id}${index}`}>
                <CusListItem 
                  itemId={item.id}
                  title={item.title} 
                  excerpt={item.excerpt}
                  gender={item.gender}
                  forumName={item.forumName}
                  topics={item.topics}
                  commentCount={item.commentCount}
                  divider={index !== listLength - 1}
                />
              </div>
            )
          }
        })
      }
    </StyledList>   
  );
}

CusList.prototype = {
  listData: PropTypes.array,
  isLoading: PropTypes.bool,
  lastItemRef: PropTypes.func
}
