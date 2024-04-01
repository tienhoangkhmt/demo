import { ACTION_REDUCER_TYPE } from "../constants/table.constants";
import { AReducerParam, TReducerFn } from "../type/table.type";

export const initialValuesTable: TReducerFn = {
  isLoading: false,
  dataSource: undefined,
  params: {}
}

export const tableReducer = (state:TReducerFn, action: AReducerParam):TReducerFn => {

  switch (action.type) {
    case ACTION_REDUCER_TYPE.GET_DATA: {
      return {
        ...state,
        ...action.payload,
        params: {
          ...state.params,
          ...action.payload.params
        }
      }
    }
    
    default: {
      return initialValuesTable;
    }
  }
}
