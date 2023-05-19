git pull
yarn install
rm -rf .next
pm2 stop icapital
pm2 delete icapital
rm .env
echo '
NEXT_PUBLIC_DOMAIN=icapitalafrica.org
NEXT_PUBLIC_API=https://strapi.icapitalafrica.org/graphql
NEXT_PUBLIC_DATA=https://strapi.icapitalafrica.org
NEXT_PUBLIC_SOCKET=wss://strapi.icapitalafrica.org/graphql
NEXT_PUBLIC_NODE_ENV=production

' >.env
yarn build
pm2 start yarn  --name icapital -- start
