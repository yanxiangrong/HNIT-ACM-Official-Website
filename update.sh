git reset --hard
git pull --ff-only

docker start npm-build
docker restart acm-web-nginx
