'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     9000,

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://127.0.0.1/Angular-Placement'
  }
};
