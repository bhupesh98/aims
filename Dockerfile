FROM nginx:1.15-alpine

# RUN rm /etc/nginx/conf.d/default.conf
COPY ./out /usr/share/nginx/html
COPY ./nginx/nginx.conf /etx/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]