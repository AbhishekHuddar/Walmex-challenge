"use strict";
const mockDBCalls = require("../../database/index.js");


const getListOfAItemsOfUsersWithHandler = async (request, response) => {
  const data = await mockDBCalls.getItems();
  return response.status(200).send(JSON.stringify(data));
};

module.exports = (app) => {
  app.get("/users/items", getListOfAItemsOfUsersWithHandler);
};