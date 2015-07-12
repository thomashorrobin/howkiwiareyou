FROM nginx

RUN mkdir /etc/nginx/logs && touch /etc/nginx/logs/static.log && mkdir -p /howkiwiareyou

ADD ./nginx.conf /etc/nginx/conf.d/default.conf
ADD . /howkiwiareyou