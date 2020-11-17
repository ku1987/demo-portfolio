yarn --prefix client
pm2 stop client
yarn build --prefix client
pm2 start pm2-client.yml
yarn --prefix server
pm2 stop server
pm2 start pm2-server.yml
