# codeceptJS_all_helpers
Codecept repo consists of selenium, playwright and appium helpers.

Steps to setup appium:
----------------------
set up env: https://secabit.medium.com/how-to-run-android-emulator-without-android-studio-88a3bb1d80eb

avdmanager create avd -n Pixel_4_API_30 -k "system-images;android-30;google_apis_playstore;x86"

emulator -avd Pixel_4_API_30

sdkmanager "system-images;android-30;google_apis_playstore;x86" "platforms;android-30" "platforms;android-30" "extras;intel;Hardware_Accelerated_Execution_Manager"

avdmanager create avd -n Pixel_4_API_30 -k "system-images;android-30;google_apis_playstore;x86"

avdmanager create avd --force --name Nexus5 --abi google_apis_playstore/x86 --package 'system-images;android-30;google_apis_playstore;x86' --device "Nexus 5"

Git commands:
------------
- Do git init to initiate git local
git init

- Add a new remote repo:
git remote add origin https://github.com/HarikrishnanVK/wdio_browserstack

- To verify the origin
git remote -v

- To sync with added repo
git fetch

- To confirm the remote branch 
git branch -r

- To confirm the local branch
git branch -a

- To confirm the current branch we are in
git branch

- To rename the branch to main (as github/gitlab usually have their default branch name as main)
git branch -m main

- To add all files to remote 
git add .

- To make first commit 
git commit -m "my first commit"

- Git pull to confirm the remote changes sync with local ignoring histories
git pull --allow-unrelated-histories

- Make your first push to main branch
git push origin -u main

- To add git ignore and reinitialize the base
Add .gitignore file in local from https://github.com/github/gitignore/blob/main/VisualStudio.gitignore

git rm -r --cached .
git add .
git commit -am "Remove ignored files"
git pull --allow-unrelated-histories
git push origin -u main

git config --global user.name "softwarevikram"
git config --global user.password "Git4Practice"
git config --global user.email "softwarevikram@gmail.com"

git remote set-url origin https://github.com/HarikrishnanVK/
