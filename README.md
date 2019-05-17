# instaclone

instagram clone projects

## use

- HTTP HEADERS

  - {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNqdjd2dHpjNW13OGYwYjMwb2UyaHVxODAiLCJpYXQiOjE1NTcxMzc5MjJ9.3rOPPWsmDfTGrAfA6pb8uoRaQBUxIgTsjSrPMJsGihU"}

- console.log() 를 찍고, playground 에서 실행 한 뒤에 console 에 log 가 찍히는 것.
- 주석처리한 UserProfile, User 의 computed 파일 확인.

- log in

  - playground -> request secret -> comfirm secret -> log in!

  - deploy -f
    - prisma deploy -f 가 필요할 때가 있는데 지금 파일에서는 yarn prisma 를 지정해뒀기 때문에 yarn deploy -f 를 쓰면 된다.

## User

- create account
- Request Secret
- Confirm Secret (Login)
- Like / Unlike a photo
- Comment on a photo
- Search By User
- Search By location
- See User profile
- Follow / UnFollow User
- See the full photo
- Edit my profile
- Upload a photo
- Edit the photo (Delete)
- See the feed

## Questions

- how to server restart? (to resolve "Error: listen EADDRINUSE: address already in use" error!)
- where to typing node command? in vscode propmt and cmd, it's not work.
- it's maybe need command for window
- and fint what server and that PID and delete that task
