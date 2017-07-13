const { shell } = require('electron');

module.exports = (HyperToolbar, { React }) => {
  class HyperToolbarGit extends React.Component {
    constructor (props) {
      super(props);
      this.openRepoInBrowser = this.openRepoInBrowser.bind(this);
    }

    openRepoInBrowser() {
      shell.openExternal(this.props.git.remoteUrl);
    }

    render () {
      const gitInfo = this.props.git;
      return React.createElement('div', { className: `hyper-git-container ${gitInfo.branchName ? 'show' : ''}`},
        React.createElement('img', { className: 'git-icon', src:'data:image/png;base64,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' }, null),
        React.createElement('span', { className: `branch-name ${gitInfo.isDirty ? 'dirty' : ''}`, onClick: this.openRepoInBrowser }, `${gitInfo.branchName}`)
      );
    }
  }

  HyperToolbarGit.displayName = 'hyper-toolbar-git';

  return class extends React.Component {
    constructor (props) {
      super(props);
    }

    render() {
      this.props.plugins = (this.props.plugins || [])
        .concat(React.createElement(
          HyperToolbarGit,
          {
            git: this.props.state.git
          }
        ));
      return React.createElement(HyperToolbar, this.props);
    }
  }
};
