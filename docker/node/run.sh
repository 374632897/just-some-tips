echo 'Listening at 3090'
docker run -it --rm --name node-nginx --volume `pwd`:/app/ 14b343820550  /bin/bash
