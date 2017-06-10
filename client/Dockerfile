FROM ubuntu:16.04

MAINTAINER Julien Semaan version: 0.1

RUN apt-get update && apt-get install -y apache2 wget git npm perl gcc curl make && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN ln -s /usr/bin/nodejs /usr/bin/node

RUN yes | cpan Template Getopt::Long JSON File::Slurp Tie::IxHash

ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data
ENV APACHE_LOG_DIR /var/log/apache2
ENV APACHE_PID_FILE /var/run/apache.pid
ENV APACHE_LOCK_DIR /var/run/apache-lock

ENV BUILD_DESTINATION /var/www/html

EXPOSE 80
EXPOSE 443
EXPOSE 8000

RUN mkdir -p $APACHE_LOCK_DIR
RUN rm -fr /var/www/html

#RUN git clone https://github.com/julsemaan/anyfile-notepad
ADD . /tmp/anyfile-notepad
RUN wget https://gist.githubusercontent.com/julsemaan/3169b51e6451f526e48bc1ca195bc753/raw/36931d69a1a0b408e94507701e63751c02c2256f/afn-build-for-docker.sh
RUN bash afn-build-for-docker.sh

CMD ["/usr/sbin/apache2", "-D", "FOREGROUND"]
