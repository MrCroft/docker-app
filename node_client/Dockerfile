FROM node:8.9

COPY app /var/www/my-app.com

RUN npm install pm2@latest -g \
    && pm2 install typescript

WORKDIR /var/www/my-app.com

RUN npm install \
    && npm run build:local

EXPOSE 8000

# Production
CMD [ "pm2-docker", "pm2.config.json" ]

# Development
# CMD [ "pm2-dev", "pm2.config.json" ]
