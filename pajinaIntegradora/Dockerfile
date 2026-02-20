FROM nginx:alpine
LABEL version="1.1"
LABEL description="Página web del sitio oficial de nuestro proyecto."
LABEL maintainer="QUE@gmail.com"
WORKDIR /usr/share/nginx/html
COPY . .
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]