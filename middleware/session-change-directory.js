const { exec, execSync } = require('child_process');
const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf-8');

const checkDirty = (cwd) => {
  const output = decoder.write(execSync(`git status --porcelain --ignore-submodules -unormal`, { cwd: cwd }));
  return !output.length ? false : true;
};

const checkRemoteUrl = (cwd) => {
  return decoder.write(execSync(`git config --get remote.origin.url`, { cwd: cwd }));
};

module.exports = (store) => (next) => (action) => {
  if (action.type === 'SESSION_CHANGE_DIRECTORY') {
    exec(`git symbolic-ref --short HEAD || git rev-parse --short HEAD`, { cwd: action.payload }, (err, branch) => {
      if (err) {
        store.dispatch({
          type: 'SET_GIT_INFO',
          payload: {}
        });
      } else {
        store.dispatch({
          type: 'SET_GIT_INFO',
          payload: {
            branchName: branch,
            isDirty: checkDirty(action.payload),
            remoteUrl: checkRemoteUrl(action.payload)
          }
        });
      }
    });
  }
  next(action);
};
