# ID=1583 TOKEN=BAhJIiU2NDFlZWUzMTRlOTZkNWFiOWU3NGNkYzJiMjkwNzhmOAY6BkVG--afbf9e04cdaab40d73d40f83b5fbbb515b290ee8 INDEX=1 VALUE="x" sh scripts/make-moves.sh
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
