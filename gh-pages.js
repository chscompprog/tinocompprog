var ghpages = require('gh-pages');

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/chscompprog/tinocompprog.git', // Update to point to your repository
    user: {
      name: 'tino', // update to use your name
      email: 'chscompprogramming@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);