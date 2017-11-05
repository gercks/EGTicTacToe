# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/post"

#ID=1583 TOKEN=BAhJIiU3YWZiMWYxODhjZGEyNmYwZDBjZmE1M2YzMzcxNDI1NAY6BkVG--15e8e78d2e5e75b842de448d43643b55747be5a1 sh scripts/new-game.sh
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Authorization: Token token=$TOKEN"

echo
