#!/bin/sh

# Make sure to have "sass" and "serve" installed globally
# npm install -g sass serve

# Execute "sass" and then fork a new process to start "serve"
sass sass/main.scss docs/style.css --watch & serve docs