const functions = require('firebase-functions');
const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const {
  meetingDB
} = require('../../../db');

module.exports = async (req, res) => {
  const {
    title,
    userIds
  } = req.body;

  if (!title) return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_TITLE));
  if (!userIds) return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_M_USER));
  let client;

  try {
    client = await db.connect(req);
    //Meeting 테이블 생성
    const meeting = await meetingDB.openMeeting(client, title);
    //Muser 테이블 생성
    const musers = await meetingDB.createMUsers(client, meeting.id, userIds)

    //MUser를 불러오고싶다면?
    //const users = await meetingDB.getUsersByIds(client, userIds)

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.ADD_ONE_POST_SUCCESS, meeting));
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);

    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  } finally {
    client.release();
  }
};