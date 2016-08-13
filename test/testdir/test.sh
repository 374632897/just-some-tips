#!/bin/bash
count=0;
while (( count < 10)); do
  echo "test haha" >> testfile${count};
  (( count++ ));
done;
echo -e "\033[35mdone\033[0m";

