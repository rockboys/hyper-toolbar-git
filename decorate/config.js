module.exports = (config) => {
  return Object.assign({}, config, {
    css: `
      ${config.css || ''}
      .hyper-git-container  {
        display: none;
      }
      .hyper-git-container.show {
        display: block;
      }
      .hyper-git-container .git-icon {
        width: 20px;
      }
      .hyper-git-container .branch-name {
        position: relative;
        top: -6px;
        margin-left: 5px;
        color: #FFFFFF;
        text-decoration: none;
        cursor: pointer;
      }
      .hyper-git-container .branch-name.dirty {
        color: #D50000;
      }
    `
  });
};
