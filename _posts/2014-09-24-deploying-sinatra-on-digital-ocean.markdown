---
author: Aniket
layout: post
type: post
date: 2014-09-24 00:02
title: "Deploying Sinatra on Digital Ocean"
category: note
tags: []
---

Deploying a Ruby application on a server of your own can get challenging when
you wish to make the deployment procedure simple.

Recently, I got myself a Digital Ocean account. My primary motivation of
shifting to a VPS was to learn more about deploying applications and to be able
to ship out my side projects.

It would hardly take you a couple of minutes to get a droplet up and running.

I quickly created a GitHub repository called `hello` and wrote a tiny Sinatra
application. After this, I created a user account on my server for handling the
deployments.

My first choice for a deployment tool was [Capistrano](http://capistranorb.com)
and I setup my application to use it. After fiddling with Capistrano for a few
days, I realised that SSH Kit doesn't really work that well for me. Having been
used to a Grunt based deployment setup at my present organisation, Capistrano's
in-built tasks did not suit my needs. At present, I wish to have more control
over the deployment procedure. Since, I had heard so much praise about the tool
and because of the abundant documentation available online, I decided to give it
some more time. Even after a few more tries, it didn't really work out.

Initially, when I was looking around for deployment tools, I had come across
[Mina](http://mina-deploy.github.io/mina), but for some strange reason I
dismissed it. After my repeated failures with Capistrano, I decided to use Mina.
What Mina does is that it creates a single batch script which it then sends to
the server and executes. According to me, this is a fantastic technique because
it reduces the number of requests made during the procedure. Also, it allows for
the usage of other commands straight away.

My current [deploy
script](https://github.com/aniketpant/hello/blob/master/config/deploy.rb) is pretty neat:

```ruby
require 'mina/bundler'
require 'mina/git'
require 'mina/rbenv'
require 'configatron'

require './config/settings.rb'

set :domain, configatron.server.host
set :deploy_to, configatron.server.deploy_to

set :repository, configatron.git.repository
set :branch, configatron.git.branch

set :user, configatron.ssh.user
set :forward_agent, configatron.ssh.forward_agent
set :identity_file, configatron.ssh.identity_file

set :shared_paths, ['log', 'tmp']

task :environment do
  invoke :'rbenv:load'
end

task :setup => :environment do
  queue! %[mkdir -p "#{deploy_to}/shared/log"]
  queue! %[chmod g+rx,u+rwx "#{deploy_to}/shared/log"]

  queue! %[mkdir -p "#{deploy_to}/shared/tmp"]
  queue! %[chmod g+rx,u+rwx "#{deploy_to}/shared/tmp"]
end

desc "Deploys the current version to the server."
task :deploy => :environment do
  deploy do
    invoke :'git:clone'
    invoke :'deploy:link_shared_paths'
    invoke :'bundle:install'

    to :launch do
      invoke :restart
    end
  end
end

desc "Restart the server."
task :restart => :environment do
  in_directory "#{deploy_to}/#{current_path}" do
    queue "bundle exec thin -R config.ru -p 4567 -d restart"
  end
end

desc "Start the server."
task :start => :environment do
  in_directory "#{deploy_to}/#{current_path}" do
    queue "bundle exec thin -R config.ru -p 4567 -d start"
  end
end

desc "Stop the server."
task :stop => :environment do
  in_directory "#{deploy_to}/#{current_path}" do
    queue "bundle exec thin -R config.ru -p 4567 -d stop"
  end
end

desc "Report server process id"
task :info => :environment do
  in_directory "#{deploy_to}/#{shared_path}" do
    queue "print 'Server running with pid:' `cat tmp/pids/thin.pid`"
  end
end
```

