#!/bin/bash
default_commit_msg=':smirk:';
if [ -n $1 ]; then
  default_commit_msg=$1;
fi;
git add .;
git commit -m "$default_commit_msg";
git push;
