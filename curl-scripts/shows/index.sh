# REST_ID=5fc6946f036f2b5763bdaf50 sh curl-scripts/reviews/create.sh
curl --include "http://localhost:4741/shows" \
--header "Authorization: Bearer ${TOKEN}" \
