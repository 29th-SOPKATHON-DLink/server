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

------
## 👨‍👩‍👧‍👦 Developer & Role
![image](https://user-images.githubusercontent.com/72644361/142736053-462706af-a2ad-457e-bb1b-85d728a93d1e.png)

