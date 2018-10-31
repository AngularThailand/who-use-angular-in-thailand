if [ $CIRCLE_BRANCH == $SOURCE_BRANCH ]; then
  git config --global user.name $GH_NAME > /dev/null 2>&1
  git config --global user.email $GH_EMAIL > /dev/null 2>&1
  git clone $CIRCLE_REPOSITORY_URL project
  cd project
  git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
  git rm -rf .
  cd ..


  cp -a dist/who-use-angular-in-thailand/. project/.

  mkdir -p project/.circleci && cp -a .circleci/. project/.circleci/.
  cd project

  git add -A
  git commit -m "Automated deployment to GitHub Pages: ${CIRCLE_SHA1}" --allow-empty
  git push origin $TARGET_BRANCH > /dev/null 2>&1
fi
