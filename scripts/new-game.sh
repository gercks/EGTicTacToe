# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/post"

#ID=1583 TOKEN=BAhJIiU2NmJlOTc4NTYxNTFhMzU5ZDA0NWI4YmQ2NDM4ZDczZgY6BkVG--2655026cbef1c7de429d4c6dabc7f7722df0f983 sh scripts/new-game.sh
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Authorization: Token token=$TOKEN"
  --data '{
    "credentials": {
      "square": "'"${square}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD_CONFIRMATION}"'"
    }
  }'
echo
