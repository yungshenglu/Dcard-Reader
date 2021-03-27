import PropTypes from 'prop-types';
import AntEmpty from '@C/AntEmpty';
import AntSkeleton from '@C/AntSkeleton';
import CusListItem from '@C/CusListItem';
import { StyledList, StyledSpinContainer } from './style';


export function CusList({ listData = [], isLoading = true, lastItemRef }: any) {
  const listLength = listData?.length;

  // Render
  return (
    <StyledList>
      {
        isLoading
        ? <StyledSpinContainer>
            <AntSkeleton active/>
          </StyledSpinContainer>
        : listData
          ? listData.map((item: any, index: number) => {
              if (index === listLength - 1) {
                return (
                  <>
                    <div 
                      ref={lastItemRef} 
                      data-id={item.id}
                    >
                      <CusListItem 
                        key={item.id}
                        id={item.id}
                        title={item.title} 
                        excerpt={item.excerpt}
                        gender={item.gender}
                        forumName={item.forumName}
                        topics={item.topics}
                        commentCount={item.commentCount}
                        divider={index !== listLength - 1}
                      />
                    </div>
                    { isLoading ? <AntSkeleton active/> : null }
                  </>
                )
              } else {
                return (
                  <CusListItem 
                    key={item.id}
                    id={item.id}
                    title={item.title} 
                    excerpt={item.excerpt}
                    gender={item.gender}
                    forumName={item.forumName}
                    topics={item.topics}
                    commentCount={item.commentCount}
                    divider={index !== listLength - 1}
                  />
                )
              }
            })
          : <AntEmpty />
      }
    </StyledList>   
  );
}

CusList.prototype = {
  listData: PropTypes.array,
  isLoading: PropTypes.bool,
  lastItemRef: PropTypes.func
}
