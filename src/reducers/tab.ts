const CHANGE = 'CHANGE'

const INITIAL_STATE = {
  board: 1
}

export const change = (board) => {
  return {
    type: CHANGE,
    board
  }
}

export default function tab (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        board: action.board
      }
    default:
      return state
  }
}
