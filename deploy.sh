git pull origin master
cd client
npm run build
pm2 delete all
pm2 --name client restart npm -- start
cd ../server
pm2 --name server restart npm -- start