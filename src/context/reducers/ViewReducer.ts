import produce from 'immer';

interface ViewStateProps {
  loading: string;
}

export const ViewInitialState: ViewStateProps = {
  loading: 'red',
};

const ViewReducer = (state: ViewStateProps, action: any) =>
  produce(state, (draft: ViewStateProps) => {
    switch (action.type) {
      case 'changeLoading':
        draft.loading = draft.loading === 'red' ? 'green' : 'red';
        break;
      default:
        break;
    }
  });

export default ViewReducer;
