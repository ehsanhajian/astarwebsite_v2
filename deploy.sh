echo "Kill all the running PM2 actions"
 pm2 kill

echo "Jump to app folder"
cd ~/astarwebsite_v2/backend

echo "Update app from Git"
git pull

echo "Install app dependencies"
npm install

echo "Build your app"
NODE_ENV=production npm run build

echo "Run new PM2 action"
cp ~/ecosystem.config.js .
pm2 start ecosystem.config.js
