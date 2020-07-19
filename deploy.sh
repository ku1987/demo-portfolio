npm ci --prefix client
npm run build --prefix client
pm2 stop client
pm2 start pm2-client.yml
npm ci --prefix client
pm2 stop server
pm2 start pm2-server.yml
