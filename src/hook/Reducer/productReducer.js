const productReducer = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      }
    case 'GET_PRODUCT':
      return {
        ...state,
        product: action.payload.product,
        payload: action.payload.payload,
      }
    default:
      return state
  }
}

export default productReducer
