FROM node:12-alpine

WORKDIR /app
COPY . .

ENTRYPOINT [ "node", "." ]
CMD [ "print" ]
