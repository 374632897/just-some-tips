# -*- coding: utf-8 -*-
import urllib.parse
import urllib.request

request = urllib.request;
location = 'http://192.168.0.106:8040/webpage/index.php';
# location = 'http://192.168.0.106:8040/webpage/index.php';
# location = 'https://www.teambition.com';
# location = 'https://www.baidu.com';
# location = 'https://www.zfanw.com/blog/';
# location = 'http://beta.rishiqing.com/';
i = 1;
while i < 1000:
  print('第 %s 次访问' % i)
  res = request.urlopen(location);
  # print(res.read())
  i = i + 1
