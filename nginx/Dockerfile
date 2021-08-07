FROM nginx

RUN echo "Asia/shanghai" > /etc/timezone;
RUN rm -rf /etc/localtime;
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

RUN mkdir /var/log/nginx/web

EXPOSE 80

ENTRYPOINT ["nginx-debug","-g","daemon off;"]