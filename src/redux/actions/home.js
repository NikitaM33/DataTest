import { tableDataAPI } from '../../api';
import { SET_LOAD, SET_TABLE_DATA } from '../constants';

const isLoading = (payload) => ({ type: SET_LOAD, payload });
const setTableData = (payload) => ({ type: SET_TABLE_DATA, payload });

export const fetchtableData = () => async (dispatch) => {
  try {
    dispatch(isLoading(true));

    const rersponse = await tableDataAPI.getData();
    dispatch(setTableData(rersponse.data));

    dispatch(isLoading(false));
  } catch (err) {
    console.warn(err);
  }
};
