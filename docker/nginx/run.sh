#!/bin/bash
echo 'Listening Port is 32190';
docker run -it --rm --volume `pwd`:/etc/nginx/conf.d/ -p 32190:80  0d493297b409 /bin/bash
