import produce from 'immer';

export const RowInitialState: any = {};

const RowReducer = (state: any, action: any) =>
  produce(state, (draft: any) => {
    switch (action.type) {
      case 'getRows':
        return console.log('set rows');
      case 'createRow':
        return console.log(draft, 'create');
      case 'deleteRows':
        return console.log('delete');
      case 'updateRow':
        return console.log('update');
      case 'searchRow':
        return console.log('search');
    }
  });

export default RowReducer;
