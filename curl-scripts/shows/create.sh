# sh curl-scripts/index.sh

curl 'http://localhost:4741/shows' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "show": {
      "title": "'"${TITLE}"'",
      "director": "'"${DIRECTOR}"'",
      "rating": "'"${RATING}"'",
      "releaseDate": "'"${RELEASEDATE}"'",
      "description": "'"${DESC}"'"
    }
  }'
