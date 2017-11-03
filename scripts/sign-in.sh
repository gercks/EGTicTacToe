#!/bin/bash

API="${API_ORIGIN:-http://httpbin.org}"
URL_PATH="/post"
# API="${API_ORIGIN:-https://gercks.github.io/EGTicTacToe}"
# URL_PATH="/sign-in/"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data '{
    "credentials": {
      "username": "'"${USERNAME}"'",
      "password": "'"${PASSWORD}"'",
    }
  }'

echo
