document.write("准到窒息！1张心理测试图，一秒将你看透！");

function sayHello1() {
  var response = prompt ("What's your name?");
  alert("你好,"+response+"。你是一个比较缺乏安全感的人，本质是一个悲观主义者。很容易因为一些小细节引发内心焦虑、敏感，害怕孤独，需要朋友、亲人的陪伴。");
}

function sayHello2() {
  var response = prompt ("What's your name?");
  alert("你好,"+response+"。你是一个积极乐观的人。经常能发现生活中的美好，一些好的小事也能让你感到很幸福。即使遇到问题，你也有向阳的体质，会自我安慰，慢慢走出来。");
}

function loop() {
  var possibility = [];
  for (i=1;i<4;i++){
    possibility[i]=prompt("请输入你看到的东西（3个）");
  }
  alert("你洞见的事物包括"+possibility+"。你真是个视力很好的人。");
}
