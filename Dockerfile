FROM notaorg/nota-ubuntu-16.04:latest

RUN apt install curl -y && \
    curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
    apt install nodejs -y \
    && npm install -g bower \
    && npm install -g grunt-cli;

ARG userID
ARG groupID
ENV userID ${userID}
ENV groupID ${groupID}

COPY . /app

WORKDIR /app

RUN chown -R ${userID}:${groupID} /app

RUN mkdir /home/frontend -p \
    && chown -R ${userID}:${groupID} /home/frontend

# need for phantomjs install as it writes to a "home" directory
ENV HOME /home/frontend

USER ${userID}

RUN npm install phantomjs-prebuilt@2.1.14 --ignore-scripts \
    && npm install \
    && bower install;

EXPOSE 9000

CMD ["grunt"]
