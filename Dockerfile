FROM node:current-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN apk add --no-cache gcc musl-dev linux-headers

RUN apt-get update && apt-get upgrade && apt-get install -y nano

EXPOSE 8000

CMD npm start