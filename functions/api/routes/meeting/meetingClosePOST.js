const functions = require('firebase-functions');
const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { meetingDB } = require('../../../db');


module.exports = async (req, res) => {
const {id} = req.params;
const {image, soju, beer, makgeolli, etc, review} = req.body;

// 에러 트래킹을 위해 try / catch문을 사용합니다.
// try문 안에서 우리의 로직을 실행합니다.
let client;

  try {
    client = await db.connect(req);
    const postcheck = await meetingDB.checkPost(client, id);
    const post = await meetingDB.addPost(client, id, image, soju, beer, makgeolli, etc, review);

    
   
    
    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.ADD_ONE_POST_SUCCESS, post));
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);

    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  } finally {
    client.release();
  }
};