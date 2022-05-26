FROM nginx:1.21.6-alpine
COPY dist/ /usr/share/nginx/html
COPY index.html /usr/share/nginx/html
COPY assets /usr/share/nginx/html
COPY .docker/cv.jleo.tech.conf /etc/nginx/conf.d/cv.jleo.tech.conf
