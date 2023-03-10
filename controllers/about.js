"use strict";
import logger from "../utils/logger.js";
import developersStoreObject from "../models/developer-store.js";

const about = {
  index(request, response) {
    logger.info("about rendering");

    const viewData = {
      title: "About the Team",
      developers: developersStoreObject.getAllDevelopers(),
    };

    response.render("about", viewData);
  },
};

export default about;
