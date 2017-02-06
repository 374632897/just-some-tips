#! /bin/bash
clearLog='/console\.log/d;';
clearInfo='/console\.info/d;';
clearWarn='/console\.warn/d;';
all='/console\./d;'
specifyDir () {
  read -p "请指定要清理的目录(默认为src):" _dir;
  echo $_dir;
}

printType () {
  echo "请指定需要清除的类型： ";
  echo "   1 -- console.log";
  echo "   2 -- console.info";
  echo "   3 -- console.warn";
  echo "   4 -- 所有类型(包含未列出类型)";
}

specifyConsoleType () {
  read -n 1 _type;
  echo $_type;
}

getFilterContent () {
  local default=$clearInfo;
  case $1 in
    1) default=$clearLog;;
    3) default=$clearWarn;;
    4) default=$all;;
    *) ;;
  esac;
  echo $default;
}

# $1 directory
# $2 consoletype
handleFind () {
  local default=`getFilterContent $2`;
  # 在mac下由于强制备份使用-i选项的时候需要指定后缀名， 直接覆盖的话， 就可以使用-i ''
  find "$1" -type f -iname "*.js" -exec sed -i '' -ne $default"p" {} \;
}

_dir='src';
[ $1 ] && _dir=$1;
# _dir='src/views/header';
printType;
_type=`specifyConsoleType`;
echo '';
handleFind $_dir $_type;
