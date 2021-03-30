FROM nginx:alpine


COPY ./ assets/usr/share/nginx/html


COPY . /usr/share/nginx/html