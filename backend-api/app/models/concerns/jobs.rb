# frozen_string_literal: true

module Jobs
  extend ActiveSupport::Concern

  def forward_to_log
    $stdout.reopen("public/log/job_#{@jobid}.log", 'a')
    $stdout.sync = true
  end
end
