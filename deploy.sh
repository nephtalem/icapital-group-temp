git pull
yarn install
rm -rf .next
pm2 stop shewaber
pm2 delete shewaber
rm .env
echo '
NEXT_PUBLIC_DOMAIN=shewaber.com
NEXT_PUBLIC_API=https://api.shewaber.com/graphql
NEXT_PUBLIC_DATA=https://api.shewaber.com
NEXT_PUBLIC_SOCKET=wss://api.shewaber.com/graphql
NEXT_PUBLIC_NODE_ENV=production
APOLLO_KEY=service:Shewaber:x61JwV4PSS40Y7aI5kJnoQ
APOLLO_GRAPH_REF=Shewaber@current
APOLLO_SCHEMA_REPORTING=true
' >.env
yarn build
pm2 start yarn --name shewaber -- start
