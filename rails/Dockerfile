FROM ruby:2.3.4

ENV LANG C.UTF-8

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN apt-get install -y qt5-default qt5-qmake libqt5webkit5-dev gstreamer1.0-plugins-base gstreamer1.0-tools gstreamer1.0-x
RUN apt-get install -y emacs vim

RUN mkdir /app
WORKDIR /app

RUN gem i -v 5.1.3 rails
RUN gem install bundler

ADD Gemfile /app
ADD Gemfile.lock /app

RUN bundle install

ARG PORT
EXPOSE ${PORT}