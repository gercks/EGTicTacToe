# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/post"
API="${API_ORIGIN:-https://gercks.github.io/EGTicTacToe/}"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \

echo
