const express = require('express'); // 서버기능 구현을 위한 core 모듈 express 호출
const path = require('path'); // 경로기능제어하기 위해서 모듈 호출
const cors = require('cors'); // 다른 서버와 연동호출
const app = express(); //실행해라


app.use(cors()); // cors 미들웨어를 삽입합니다. 다른 도메인에서 너한테 요청오면 응답해줘!

app.get('/', (req,res) => { // 요청패스에 대한 콜백함수를 넣어줍니다. [get, post] : 클라이언트쪽에서 만들떄 [use] : 내가만들때
  res.send({message:'hello'});
}); //여기까지는 이헐게 해줄게~ 선언한거

app.listen(8080, ()=>{ //여기가 실행!
  console.log('server is running on 8080')
})