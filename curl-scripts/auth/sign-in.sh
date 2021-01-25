#!/bin/bash
EMAIL="fug@fug.com"
PASSWORD=":D:D:D"
API="http://localhost:4741"
URL_PATH="/sign-in"
# EMAIL="r"
# PASSWORD="r"
# API="https://vast-thicket-05459.herokuapp.com"
# URL_PATH="/sign-in"


curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
