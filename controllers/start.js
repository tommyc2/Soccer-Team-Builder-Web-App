"use strict";

import logger from "../utils/logger.js";

const start = {
  index(request, response) {
    logger.info("start rendering");

    const viewData = {
      title: "Welcome to the Soccer Team App!",
    };

    response.render("start", viewData);
  },
};

export default start;
