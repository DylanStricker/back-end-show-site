# REST_ID=5fc6946f036f2b5763bdaf50 sh curl-scripts/reviews/create.sh
curl "http://localhost:4741/users/${USER_ID}/shows" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "user": {
      "showId": "'"${SHOW_ID}"'"
    }
  }'

echo
