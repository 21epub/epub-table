// import produce from 'immer';

interface ColumnStateProps {
  value: any[];
}

export const ColumnInitialState: ColumnStateProps = {
  value: [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '标题',
      dataIndex: 'title',
      copyable: true,
      ellipsis: true,
      tip: '标题过长会自动收缩',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
      width: '30%',
      search: false,
    },
    {
      title: '状态',
      dataIndex: 'state',
      initialValue: 'open',
      filters: true,
      valueEnum: {
        all: { text: '全部', status: 'Default' },
        open: {
          text: '未解决',
          status: 'Error',
        },
        closed: {
          text: '已解决',
          status: 'Success',
        },
        processing: {
          text: '解决中',
          status: 'Processing',
        },
      },
    },
    {
      title: '创建时间',
      key: 'since',
      dataIndex: 'created_at',
      valueType: 'date',
    },
  ],
};

const ColumnReducer = (state = ColumnInitialState, action: any) => {
  switch (action.type) {
    case 'setColumns':
      return { ...state, value: action.payload };
    default:
      return ColumnInitialState;
  }
};

export default ColumnReducer;
