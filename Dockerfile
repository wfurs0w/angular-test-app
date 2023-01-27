FROM    node:14.15.4-alpine3.12 AS build
WORKDIR /opt/app
COPY    . .
RUN     npm install -g @angular/cli@11.2.3 && \
        npm install && \
        ng build --prod

FROM    nginx:1.23.3-alpine
ARG     ARTIFACTS_DIR=/opt/app/dist/app
ARG     RELEASE_DIR=/usr/share/nginx/html
RUN     apk del curl
COPY    --from=build ${ARTIFACTS_DIR} ${RELEASE_DIR}
