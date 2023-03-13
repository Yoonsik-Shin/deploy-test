# FROM unbuntu:22.04

# RUN curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash
# RUN sudo apt install -y nodejs
# RUN sudo npm install -g yarn

FROM node:14

COPY ./package.json /class_build/
COPY ./yarn.lock /class_build/
RUN yarn install

# RUN mkdir class_build => COPY할 때 자동으로 만들어짐
COPY . /class_build
WORKDIR /class_build/

RUN yarn build

CMD yarn start