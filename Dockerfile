FROM node:erbium-alpine


RUN npm install -g serve


COPY ./ .


COPY . .

EXPOSE 5000

CMD ["serve"]

