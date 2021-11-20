const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

module.exports = {};

const postTitleGET = async (client)=>{
    const { rows } = await client.query(
        `
        SELECT title
        FROM meeting, muser, "user" u
        WHERE meeting.id=muser.mid AND muser.uid=u.id 
        `,
  
      );
    
      return convertSnakeToCamel.keysToCamel(rows);
  };

  
  const postUserGET = async (client)=>{
    const { rows } = await client.query(
        `
        SELECT u.uname
        FROM meeting, muser, "user" u
        WHERE meeting.id=muser.mid AND muser.uid=u.id
        `,
  
      );
    
      return convertSnakeToCamel.keysToCamel(rows);
  };
  const countGET = async (client)=>{
    const { rows } = await client.query(
        `
        SELECT COUNT(u.uname)-1 AS count
        FROM meeting, muser, "user" u
        WHERE meeting.id=muser.mid AND muser.uid=u.id
        `,
  
      );
    
      return convertSnakeToCamel.keysToCamel(rows[0]);
  };
  module.exports = { postTitleGET, postUserGET, countGET };