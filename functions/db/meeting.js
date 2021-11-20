const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');


const getAllUsers = async (client) => {
  const {
    rows
  } = await client.query(
    `
    SELECT u.id, u.uname, p.pname FROM "user" u, "part" p
    WHERE p.id = u.pid
    `,
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

const getUsersByIds = async (client, userIds) => {
  const {
    rows
  } = await client.query(
    `
    SELECT u.id, u.uname, p.pname FROM "user" u, "part" p
    WHERE id IN (${userIds.join()})    
    `,
  );
  return convertSnakeToCamel.keysToCamel(rows);
};


const openMeeting = async (client, title) => {
  const {
    rows
  } = await client.query(
    `
    INSERT INTO meeting
    (title)
    VALUES
    ($1)
    RETURNING *
    `,
    [title],
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

const getMeetingId = async (client) => {
  const {
    rows
  } = await client.query(
    `
    SELECT u.id, u.uname, p.pname FROM "user" u, "part" p
    WHERE p.id = u.pid
    `,
  );
  return convertSnakeToCamel.keysToCamel(rows);
};


const createMUsers = async (client, meetingId, userIds) => {
  if (userIds.length < 1) return []

  const valuesString = userIds.map(userId => `(${meetingId}, ${userId})`).join(',')

  const {
    rows
  } = await client.query(
    `
    INSERT INTO muser
    (mid, uid)
    VALUES
    ${valuesString}
    RETURNING *
    `
  )
  return convertSnakeToCamel.keysToCamel(rows);

};


const addPost = async (client, id, image, soju, beer, makgeolli, etc, review) => {
    const { rows: existingRows } = await client.query( //rows는 항상배열
      `
      SELECT * FROM meeting
      WHERE id = $1
         AND finish = 'N'
      `,
      [id],
    );
    if (existingRows.length === 0) return false;
  
    const data = _.merge({}, convertSnakeToCamel.keysToCamel(existingRows[0]), {image, soju, beer, makgeolli, etc, review });
    //merge할 때 lodash 사용?!?
    
    const { rows } = await client.query(
      `
      UPDATE meeting
      SET image = $1, soju = $2, beer = $3, makgeolli = $4, etc = $5, review = $6, updated_at = now()
      WHERE id = $7
      RETURNING * 
      `,
      [data.image, data.soju, data.beer, data.makgeolli, data.etc, data.review, id],
    );
    return convertSnakeToCamel.keysToCamel(rows[0]);
  };


  const checkPost = async (client, id) => {
    const { rows } = await client.query(
      `
      UPDATE meeting
      SET finish = 'Y', updated_at = now()
      WHERE id = $1
      RETURNING *
      `,
      
      [id],
    );
  
    return convertSnakeToCamel.keysToCamel(rows);
  };

  const titleGET = async (client, id)=>{
    const { rows } = await client.query(
        `
        SELECT meeting.title
        FROM meeting, muser
        WHERE meeting.id=muser.mid AND meeting.id=$1
        `,
        [id],
      );
    
      return convertSnakeToCamel.keysToCamel(rows[0]);
  };
  const userGET = async (client, id)=>{
    const { rows } = await client.query(
        `
        SELECT u.uname
        FROM muser, "user" u
        WHERE muser.uid=u.id AND muser.mid = $1
        `,
        [id],
      );
    
      return convertSnakeToCamel.keysToCamel(rows);
  };


 
 

  module.exports = {  getAllUsers,
  getUsersByIds,
  openMeeting,
  createMUsers, addPost, checkPost, titleGET, userGET };
