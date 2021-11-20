const admin = require('firebase-admin');
const serviceAccount = require('./sssua-0928-firebase-adminsdk-3gf4h-8c8ec1262c'); //여기에 credentiial 파일 집어넣기
const dotenv = require('dotenv');

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
  firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  firebase = admin.app();
}

module.exports = {
  api: require('./api'),
};