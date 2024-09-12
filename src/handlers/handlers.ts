
interface IList {
  before: any[];
  route: string;
  handler: any;
  method?: 'get'| 'post' | 'put' | 'delete';
}

const List: IList[] | any[] = [];

export default List;
