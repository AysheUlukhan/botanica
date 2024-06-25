echo "Switching to branch master"
git checkout master

echo "Bulding app ..."
npm run build

echo "Deploying files to server..."
scp -r dist/* ayse@159.223.18.54:/var/www/ayse/
echo "Done!"