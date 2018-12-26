#! bin/bash

git add .
read -p "Message: " $Message
git commit -m "$Message"
git push 