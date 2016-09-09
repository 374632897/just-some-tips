#!/bin/bash
# @Author: Jiang Guoxi
# @Date:   2016-08-16 16:31:36
# @Last Modified by:   Jiang Guoxi
# @Last Modified time: 2016-08-17 16:10:18
DIR=`pwd`;
line=0;
say () {
  echo 'hello world';
}
for file in *; do
  # _line=`wc -l $file`;
  _line=`cat $file | wc -l`;
  # echo _$line ----- $file;
  (( line += $_line ));
done;
echo $line;
# say
# tranverse () {
#   # echo 1;
#   _line=0;
#   # dir=$1;
#   cd $1;
#   for file in *; do
#     if [ -d $file ]; then
#       (( _line += tranverse $1$file ));
#     else
#       _line=cat $file | wc -l;
#     fi;
#   done;
#   return $_line;
#       # (( _line=))
#   # if [[ -d $1 ]]; then
#     # tranverse "$2/$1"
# }
# echo $DIR;
# line=tranverse $DIR;
