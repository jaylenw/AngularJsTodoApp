FROM notaorg/nota-ubuntu-16.04:latest

RUN apt install curl -y && \
    curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
    apt install nodejs -y \
    && npm install -g bower \
    && npm install -g grunt-cli;

RUN addgroup --system frontEndUserGroup
RUN adduser --disabled-password --gecos '' frontenduser

ARG userID
ARG groupID
ENV userID ${userID}
ENV groupID ${groupID}

COPY . /app

WORKDIR /app

RUN chown -R ${userID}:${groupID} /app
USER ${userID}

RUN npm install phantomjs-prebuilt@2.1.14 --ignore-scripts \
    && npm install \
    && bower install;

EXPOSE 9000

CMD ["grunt"]
