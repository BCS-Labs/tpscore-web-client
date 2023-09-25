FROM node:16-alpine
RUN mkdir -p /app

WORKDIR /app
COPY . .

RUN yarn install
RUN yarn run build

ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 3000

CMD ["yarn", "start"]