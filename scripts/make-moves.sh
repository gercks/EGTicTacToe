# ID=1583 TOKEN=BAhJIiVlZjMxOGQ4OGIwZmJhODdiZGVlOTcxNGZmMjE1Y2VlMwY6BkVG--2907a2fd61bcc0782d5e45613e34782b47d5fb64 INDEX=1 VALUE="x" sh scripts/make-moves.sh
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=$TOKEN"
  --data '{
  "game": {
    "cell": {
      "index": "'"${INDEX}"'",
      "value": "'"${VALUE}"'"
    },
    "over": false
  }
}'

echo
