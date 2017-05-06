#!/bin/bash
INFO='\033[36m';
NOR='\033[0m';
br='dev';

echo -e "${INFO}run lint now ... just wait a moment ...${NOR}";

[ $1 ] && br=$1;
log=`git diff origin/${br} --name-only | grep ".js$" | egrep "^src/|^tests/"`;
if [ -z "${log}" ]; then
  echo -e "${INFO}No file changed, exit now ${NOR}";
  exit 0;
fi;
node ./node_modules/eslint/bin/eslint.js $log | grep error -C 1000 --color=auto;
