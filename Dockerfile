FROM nginx

RUN mkdir /etc/nginx/logs && touch /etc/nginx/logs/static.log && mkdir -p /howkiwiareyou

USER root

RUN chown -R root:www-data /howkiwiareyou
RUN chmod -R 0755 /howkiwiareyou


ADD ./nginx.conf /etc/nginx/conf.d/default.conf
ADD . /howkiwiareyou