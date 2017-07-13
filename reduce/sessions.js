module.exports = (state, action) => {
  switch (action.type) {
    case 'SET_GIT_INFO':
      return state.setIn(['sessions', state.activeUid, 'git'], action.payload);
    default:
      return state;
  }

  return state;
};
