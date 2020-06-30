git pull origin master
cd client
npm ci
npm run build
pm2 restart client
cd ../server
npm ci
pm2 restart server