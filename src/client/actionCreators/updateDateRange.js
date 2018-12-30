export const UPDATE_DATE_RANGE = 'UPDATE_DATE_RANGE';

export default dateRange => {
  return {
    type: UPDATE_DATE_RANGE,
    payload: dateRange
  }
}