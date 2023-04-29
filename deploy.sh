git pull
yarn install
rm -rf .next
pm2 stop icapital
pm2 delete icapital
rm .env
echo '
NEXT_PUBLIC_DOMAIN=icapital.com
NEXT_PUBLIC_API=https://api.icapital.com/graphql
NEXT_PUBLIC_DATA=https://api.icapital.com
NEXT_PUBLIC_SOCKET=wss://api.icapital.com/graphql
NEXT_PUBLIC_NODE_ENV=production

' >.env
yarn build
pm2 start yarn --name icapital -- start
