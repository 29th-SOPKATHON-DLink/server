const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');


const getAllAlcol = async (client) => {
  const {
    rows
  } = await client.query(
    //row별로 덧셈 할 수 있을까?
    `
    SELECT pname, soju, beer, makgeolli, etc, total FROM part

    `,
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

const UpdateSumTotal = async (client, total) => {
  const {
    rows
  } = await client.query(
    `
    UPDATE part
    SET total = $1
    RETURNING * 
    `,
    [total],
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

const getAllRank = async (client) => {
  const {
    rows
  } = await client.query(
    `
    SELECT pname, soju, beer, makgeolli, etc, total FROM part
    ORDER BY total DESC 

    `,
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

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

  module.exports = { getAllAlcol,
  UpdateSumTotal,
  getAllRank, postTitleGET, postUserGET, countGET };
