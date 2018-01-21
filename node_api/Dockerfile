FROM node:8.9

COPY app /var/www/api.my-app.com

RUN npm install pm2 -g \
    && pm2 install typescript

WORKDIR /var/www/api.my-app.com

RUN npm install

EXPOSE 8001

# Production
CMD [ "pm2-docker", "pm2.config.json" ]

# Development
# CMD [ "pm2-dev", "pm2.config.json" ]
