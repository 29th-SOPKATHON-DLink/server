<br>

# ㄷLINK
## 🍺 Service
> 술자리 기억을 공유하며 공동체 의식을 느낄 수 있는 드링크
> <br>
> 랭킹게임을 통한 팀워크 활성화 서비스

> SOPT 29th SOPKATHON  
> 프로젝트 기간: 2021.11.20 - 2021.11.21  

![lang](https://img.shields.io/badge/Language-JavaScript-blue)  ![realease](https://img.shields.io/badge/release-v1.0.0-yellow)


## 💻 Code Convention
- [💻 Code Convention](https://www.notion.so/fruiting/Code-Convention-b29c71e559124989a30109ca0cd88a8e)

## 💻 Branch Rule
- [💻 Branch Rule](https://www.notion.so/fruiting/Branch-Rule-61cddc9ef16b4219909837e756ff0882)

## 💻 Project Foldering
```jsx
|
|- .firebaserc
|- .firebase.json
|- .gitignore
|
|- **functions**
  |- api
    |- routes
        |- home
        |- meeting
  |- config
  |- constants
  |- db
  |- lib
  |- node_modules
  |- package.json
  |- package-lock.json
  |- index.js

```

## 💻 Project Foldering
```jsx
** home **
router.get('/rank', require('./homeRankGET'));
router.post('/meeting', require('./homeMeetingGET'));

** meeting **
router.get('/user', require('./meetingUserGET'));
router.post('/open', require('./meetingOpenPOST'));
router.get('/:id', require('./meetingChoiceGET'));
router.post('/:id', require('./meetingClosePOST'));
```

## 💻 package.json
![image](https://user-images.githubusercontent.com/72644361/142741723-5fd8cf03-c711-4766-8b79-774c88296563.png)
<br>
```jsx
{
  "name": "functions",
  "description": "Cloud Functions for Firebase",
  "scripts": {
    "lint": "eslint .",
    "serve": "firebase serve -p 5000 -o 127.0.0.1",
    "shell": "firebase functions:shell",
    "start": "npm run shell",
    "deploy": "cross-env NODE_ENV=production firebase deploy --only functions",
    "logs": "firebase functions:log"
  },
  "engines": {
    "node": "12"
  },
  "main": "index.js",
  "dependencies": {
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "cross-env": "^7.0.3",
    "dayjs": "^1.10.7",
    "dotenv": "^10.0.0",
    "eslint-config-prettier": "^8.3.0",
    "express": "^4.17.1",
    "firebase-admin": "^9.2.0",
    "firebase-functions": "^3.11.0",
    "helmet": "^4.6.0",
    "hpp": "^0.2.3",
    "lodash": "^4.17.21",
    "pg": "^8.7.1"
  },
  "devDependencies": {
    "eslint": "^7.6.0",
    "eslint-config-google": "^0.14.0",
    "firebase-functions-test": "^0.2.0"
  },
  "private": true
}

```

## 💻 ERD
![image](https://user-images.githubusercontent.com/72644361/142742539-5baaa474-79d0-4dea-b9c5-d36660086200.png)

## 💻 Table of Datagrip / Base URL / API명세서
[💻 Here! ](https://www.notion.so/fruiting/TABLE-BASE-URL-API-db6a21692ae94572af2aa0f82d57a2ee)



------
## 👨‍👩‍👧‍👦 Developer & Role
![image](https://user-images.githubusercontent.com/72644361/142736053-462706af-a2ad-457e-bb1b-85d728a93d1e.png)

