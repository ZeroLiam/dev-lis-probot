module.exports = (robot) => {
  // Your code here
  robot.log('Yay, the app was loaded! Finally')

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
  robot.on(['issues.opened', 'issues.reopened'], async context => {
    //Playing with the issues
    const resp = context.issue({body: 'Changed the issue status. Let me know if you got a problem with it >:) '});

    return context.github.issues.createComment(resp);
  });

  robot.on(['push'], async context => {
    //Playing with the issues
      const resp = context.issue({number: 9, body: 'WHAT'});
    return context.github.issues.createComment(resp);
    // robot.log(context.github.reactions);
  })
}
