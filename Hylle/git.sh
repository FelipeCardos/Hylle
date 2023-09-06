#!/bin/bash

# Check if the commit message parameter is provided
if [ -z "$1" ]; then
    echo "Error: Commit message not provided."
    echo "Usage: ./g.sh <commit_message>"
    exit 1
fi

# Use the provided commit message as the parameter
commit_message="$1"

git add .
git commit -m "$commit_message"
git push origin Felipe
git checkout main
git merge Felipe
git push origin main
git checkout Felipe

echo "Done."