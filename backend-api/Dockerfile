FROM ruby:3.1-buster as builder

RUN apt update && apt install -y \
  busybox \
  ca-certificates \
  curl \
  git \
  vim \
  wget \
  build-essential \
  postgresql-client \
  postgresql-contrib \
  libpq-dev \
  gnupg1 \
  graphicsmagick \
  libtool \
  libsodium-dev \
  npm \
  openssh-client \
  rsync

RUN wget http://archive.ubuntu.com/ubuntu/pool/main/libf/libffi/libffi7_3.3-4_amd64.deb && \
    dpkg -i libffi7_3.3-4_amd64.deb && rm -rf libffi7_3.3-4_amd64.deb

RUN mkdir /usr/src/app
RUN mkdir -p /tmp/pids
WORKDIR /usr/src/app

ARG rails_environment
ENV RAILS_ENV=${rails_environment}

RUN echo "Rails Environment: $RAILS_ENV"

EXPOSE 3000

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
