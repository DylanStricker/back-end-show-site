curl "http://localhost:4741/shows/${ID}" \
  --include \
  --request PATCH \
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

echo
