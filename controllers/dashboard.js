'use strict';

// import all required modules
import logger from '../utils/logger.js';
import teams from '../models/team-shack.js';

// create dashboard object
const dashboard = {

  // index method - responsible for creating and rendering the view
  index(request, response) {

    // display confirmation message in log
    logger.info('dashboard rendering');

    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'Soccer Teams',
      teams: teams.getAllTeams(),
    };

    // render the dashboard view and pass through the data
    logger.info('about to render', viewData.teams);
    response.render('dashboard', viewData);
  },
};

// export the dashboard module
export default dashboard;
