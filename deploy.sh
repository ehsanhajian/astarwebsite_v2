echo "Jump to app folder"
cd ~/astarwebsite_v2

echo "Update app from Git"
git stash
git pull
npm install pg --save

echo "Install app dependencies"
cd ~/astarwebsite_v2/backend
npm install

echo "Build your app"
NODE_ENV=production npm run build

echo "Run new PM2 action"
cp ~/ecosystem.config.js .
sudo systemctl restart pm2-ubuntu.service
