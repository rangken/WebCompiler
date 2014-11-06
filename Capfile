require "capistrano/node-deploy"

set :application, "WebComipler"
set :repository,  "git@github.com:rangken/WebCompiler.git"
set :user, "root"
set :scm, :git
set :deploy_to, "/home/ubuntu/WebCompiler"

role :app, "54.250.170.196"

# set :app_command, "server.js"
# set :node_env, "production"
# set :node_user, "root"
# set :app_environment, "PORT=3001"

namespace :node do
  task :start do
    run "cd #{deploy_to}/current && NODE_ENV=production forever start app.js"
  end
  task :restart do
    run "cd #{deploy_to}/current && NODE_ENV=production forever restart app.js"
  end
  task :stop do
    run "cd #{deploy_to}/current && forever stop app.js"
  end
end
