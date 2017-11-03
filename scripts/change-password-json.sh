#!/bin/bash
# ID=1575 TOKEN=BAhJIiUwNzA3ZmM5YjNlZDE1YTZkNDE5ODkzYWU4ZjExYThlMQY6BkVG--3ba88f48573c1993345e7a68f28dd6c91487ac32 OLD_PASSWORD=eliza NEW_PASSWORD=elizagee sh scripts/change-password-json.sh
# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/post"
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/change-password/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLD_PASSWORD}"'",
      "new": "'"${NEW_PASSWORD}"'"
    }
  }'

echo
