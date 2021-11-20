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

}

module.exports = {
  getAllUsers,
  getUsersByIds,
  openMeeting,
  createMUsers
};