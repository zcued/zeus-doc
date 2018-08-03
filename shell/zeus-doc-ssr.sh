#!/bin/sh
echo "---------- git pull ---------"
git pull 

echo "---------- update zeus ---------"
cd /project/zeus & git pull & yarn install & yarn link

echo "---------- link zeus ---------"
yarn link "zeus"

echo "---------- start install devpendence ! ----------"
yarn install

echo "---------- start build ! ----------"
yarn build
pm2 restart prod --fork

if [ $? -ne 0 ]; then
  echo "---------- deploy falied ! -----------"
else
  echo "---------- deploy success ! -----------"
fi