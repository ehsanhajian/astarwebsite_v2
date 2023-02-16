const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

/**
* Example of how to get the number of followers for a Medium.com User.
*
*
* Related  links:
* https://github.com/Medium/medium-api-docs/issues/30#issuecomment-227911763
* https://github.com/Medium/medium-api-docs/issues/73
*/

// LODASH
const _ = require('lodash');
const cors = require('cors');

// REQUEST LIBRARY
const request = require('request-promise');

// WHACKY STUFF THEY PUT IN FRONT OF RESPONSE
const JSON_HIJACKING_PREFIX = '])}while(1);</x>';

// BUILD THE URL TO REQUEST FROM
function generateMediumProfileUri() {
  return `https://medium.com/astar-network?format=json`;
}

// HANDLE AND PARSE THE RESPONSE FROM MEDIUM
function massageHijackedPreventionResponse(response) {
  return JSON.parse(response.replace(JSON_HIJACKING_PREFIX, ''));
}

// EXTRACT THE COUNT FROM THE PROFILE DATA
function extractFollowedByCount(profileData) {
  return _.get(profileData, `payload.collection.metadata.followerCount`, 0);
}

// DO THIS THING - RETURNS A PROMISE
function getFollwersForUser() {
  const options = {
    uri: generateMediumProfileUri(),
    transform: massageHijackedPreventionResponse
  };

  return request(options)
    .then(profileData => {
      let numFollwers = extractFollowedByCount(profileData);
      return Promise.resolve(numFollwers);
    });
}

const corsHandler = cors({origin: true});

exports.mediumFollowerCount = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    const numFollwers = await getFollwersForUser();

    res.json({
      followers: numFollwers
    });
  });

});

// if (require.main === module) {
//   getFollwersForUser().then((numFollwers) => {
//     console.log(numFollwers);
//   });
// }
