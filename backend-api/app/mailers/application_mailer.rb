# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: 'noreply@somehost.su'
  layout 'mailer'
end
