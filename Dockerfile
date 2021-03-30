FROM node:erbium-alpine


RUN npm install -g serve


COPY ./ .


COPY . .

CMD ["serve"]

