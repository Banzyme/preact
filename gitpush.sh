#! bin/bash

git add .
read -p "Message: " msg
git commit -m "$Message"
git push 