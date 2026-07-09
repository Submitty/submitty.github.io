FROM ruby:3.2-slim
 
# Install build dependencies required by native gem extensions (e.g., nokogiri)
# and libcurl for htmlproofer link checking
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
      build-essential \
      git \
      libcurl4-openssl-dev \
    && rm -rf /var/lib/apt/lists/*
 
WORKDIR /site
 
# Install gems first (layer caching - only re-runs when Gemfile changes)
COPY Gemfile Gemfile.lock ./
RUN bundle install
 
# Copy the rest of the site
COPY . .
 
EXPOSE 4000
