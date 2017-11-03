#!/bin/bash

API="${API_ORIGIN:-http://httpbin.org}"
URL_PATH="/post"
# API="${API_ORIGIN:-https://gercks.github.io/EGTicTacToe}"
# URL_PATH="/change-password/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLD}"'",
      "new": "'"${NEW}"'",
    }
  }'

echo
