FROM node:16-alpine

RUN mkdir /nuxt3-admin
WORKDIR /nuxt3-admin
COPY .output/ .

ENV NUXT_PUBLIC_ICONIFY_PROVIDER https://api.iconify.design
ENV HOST 0.0.0.0
ENV PORT 8086

EXPOSE 8086 

ENTRYPOINT ["node", "server/index.mjs"]
