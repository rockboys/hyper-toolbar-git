module.exports = (state, map) => {
  const git = state.sessions.sessions[state.sessions.activeUid] ?
    state.sessions.sessions[state.sessions.activeUid].git : null;
  const branchName = git ? git.branchName : null;
  const isDirty = git ? git.isDirty : null
  const remoteUrl = git ? git.remoteUrl : null

  if (map.toolbar) {
    map.toolbar.state.git = { branchName, isDirty, remoteUrl };
  }
  return Object.assign({}, map);
};
