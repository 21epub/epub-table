import produce from 'immer';

interface ColumnStateProps {
  value: any[];
}

export const ColumnInitialState: ColumnStateProps = {
  value: [],
};

const ColumnReducer = (state: ColumnStateProps, action: any) =>
  produce(state, (draft: ColumnStateProps) => {
    switch (action.type) {
      case 'setColumns':
        // draft.value = action.payload;
        console.log(draft, 777777777777);
        console.log(action.payload, 777777777777);
        return;
      case 'createColumn':
        return console.log(draft, 'create');
      case 'deleteColumns':
        return console.log('delete');
      case 'updateColumn':
        return console.log('update');
      case 'searchColumn':
        return console.log('search');
    }
  });

export default ColumnReducer;
