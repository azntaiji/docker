# syntax=docker/dockerfile:1
FROM node:25-alpine
RUN apk add --no-cache bash zsh git coreutils
SHELL ["/bin/zsh", "-c"]
RUN npm install -g npm@latest
RUN git clone https://github.com/jackyzha0/quartz.git
WORKDIR /quartz
RUN npm i
RUN npx quartz create -X "new" -l "shortest"
RUN touch /quartz/quartz.config.ts
RUN touch /quartz/quartz.layout.ts