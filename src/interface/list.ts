export interface IListItem {
  itemId: number,
  title: string,
  excerpt: string,
  gender: string,
  forumName: string,
  topics: Array<string>,
  commentCount: number,
  divider: boolean
};