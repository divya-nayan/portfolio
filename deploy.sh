#!/bin/bash

# Build the project
npm run build

# Navigate to the build folder
cd dist

# Initialize a new git repository in the build folder
git init
git add -A
git commit -m 'Deploy to GitHub Pages'

# Push to the gh-pages branch
git push -f https://github.com/divya-nayan/portfolio.git master:gh-pages

cd ..

echo "Deployment complete! Your portfolio will be available at https://divya-nayan.github.io/portfolio/"