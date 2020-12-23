# FROM nginx
# WORKDIR /usr/share/nginx/html
# COPY css /css/
# COPY js /js/
# COPY /index.html /index.html
# COPY /favicon.ico /favicon.ico
# COPY ./entrypoint.sh /usr/share/nginx/html
# COPY ./nginx.default.conf /etc/nginx/conf.d/default.conf
# RUN chmod +x ./entrypoint.sh
# ENTRYPOINT ["./entrypoint.sh"]
FROM centos
RUN yum install -y wget proc-devel net-tools gcc zlib zlib-devel make openssl-devel
RUN wget http://nginx.org/download/nginx-1.17.0.tar.gz
RUN tar zxvf nginx-1.17.0.tar.gz
WORKDIR nginx-1.17.0
RUN ./configure --prefix=/usr/local/nginx && make && make install
EXPOSE 80
EXPOSE 443
RUN echo "daemon off;" >> /usr/local/nginx/conf/nginx.conf
WORKDIR /root/app/nginx
ADD run.sh /run.sh
RUN chmod 755 /run.sh
COPY css /css/
COPY js /js/
COPY /index.html /index.html
COPY /favicon.ico /favicon.ico
CMD ["/run.sh"]

























