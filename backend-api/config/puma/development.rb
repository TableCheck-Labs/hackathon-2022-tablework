#!/usr/bin/env puma
# frozen_string_literal: true

environment 'development'

# Store the pid of the server in the file at "path".
#
pidfile "#{Rails.root}/tmp/pids/puma.pid"

# Use "path" as the file to store the server info state. This is
# used by "pumactl" to query and control the server.
#
state_path "#{Rails.root}/tmp/pids/puma.state"

# Redirect STDOUT and STDERR to files specified. The 3rd parameter
# ("append") specifies whether the output is appended, the default is
# "false".
#
# stdout_redirect '/u/apps/lolcat/log/stdout', '/u/apps/lolcat/log/stderr'
stdout_redirect "#{Rails.root}/log/stdout", "#{Rails.root}/log/stderr", true

activate_control_app 'unix:///tmp/pids/pumactl.sock'
