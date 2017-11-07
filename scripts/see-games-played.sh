# ID=1583 TOKEN=BAhJIiVkYTRlODk4NmU3ZDdiMTRkNjdhZjk5YmE1MzM4YmJkNwY6BkVG--e62edfcab8809e7a6628bd295b9a0fd3ccb2b047 sh scripts/see-games-played.sh
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"


echo
