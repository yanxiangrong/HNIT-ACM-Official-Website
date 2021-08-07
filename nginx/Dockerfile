FROM nginx

RUN echo "Asia/shanghai" > /etc/timezone;
RUN rm -rf /etc/localtime;
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

EXPOSE 80

ENTRYPOINT ["nginx-debug","-g","daemon off;"]