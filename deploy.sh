git pull origin master
cd client
npm run build
pm2 --name HelloWorld start npm -- start