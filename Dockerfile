FROM node:current-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN apk add --no-cache gcc musl-dev linux-headers

RUN apk update && apk upgrade -y

EXPOSE 8000

CMD npm start