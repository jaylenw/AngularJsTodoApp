FROM ubuntu16.04-updated

RUN apt install curl -y && \
    curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
    apt install nodejs -y \
    && npm install -g bower \
    && npm install -g grunt-cli;

RUN addgroup --system frontEndUserGroup
RUN adduser --disabled-password --gecos '' frontenduser

COPY . /app

WORKDIR /app

RUN chown -R frontenduser:frontEndUserGroup /app
USER frontenduser

RUN npm install phantomjs-prebuilt@2.1.14 --ignore-scripts \
    && npm install \
    && bower install;

EXPOSE 9000

CMD ["grunt"]
