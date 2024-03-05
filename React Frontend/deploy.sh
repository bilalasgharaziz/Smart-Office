echo "starting the deployment"

git checkout main

echo "Building an app..."
npm run build

echo "Deploying files to the server"
scp -r ./build/* sity@131.188.45.27:/home/sity/build

echo "Done...!!!"