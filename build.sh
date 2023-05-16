yarn install
rm -rf .next
rm .env
echo '
NEXT_PUBLIC_DOMAIN=icapital.com
NEXT_PUBLIC_API=https://strapi.icapitalafrica.org/graphql
NEXT_PUBLIC_DATA=https://strapi.icapitalafrica.org
NEXT_PUBLIC_SOCKET=wss://strapi.icapitalafrica.org/graphql
NEXT_PUBLIC_NODE_ENV=production

' >.env

yarn build
