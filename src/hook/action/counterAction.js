import { INCREASE, DECREASE } from '../type/typeAction'

export const increase = (dispatch) => {
  dispatch({
    type: INCREASE,
    payload: {},
    data: [],
  })
}

export const decrease = (dispatch) => {
  dispatch({
    type: DECREASE,
    payload: {},
    data: [],
  })
}
