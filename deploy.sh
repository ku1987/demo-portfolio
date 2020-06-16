git pull origin master
cd client
npm run build
pm2 restart client
cd ../server
pm2 restart server