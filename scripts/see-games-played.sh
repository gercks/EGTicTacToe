# ID=1583 TOKEN=BAhJIiU2NDFlZWUzMTRlOTZkNWFiOWU3NGNkYzJiMjkwNzhmOAY6BkVG--afbf9e04cdaab40d73d40f83b5fbbb515b290ee8 sh scripts/see-games-played.sh
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"


echo
