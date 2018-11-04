## 目标

## 主要功能
```
  nodejs  提供mongodb api
          提供wsserver给前端GUI显示
          提供task api 给前端执行任务   
```

## 流程

```nomnoml

[server] ->  [redis]
  [server] ->[httpserver
  ]
  [httpserver]-> [task]
      [httpserver]->[mongodb]
  [server] ->[wsserver]
```




```mermaid
sequenceDiagram
server->server:初始化
server->>task:初始化
server->>wsserver:初始化
server->>redis:初始化


gui->>task:开始执行任务(task)
task->>mongodb:获取任务详(task)
task->>agent:运行任务
task->>redis:订阅事件
agent->>redis:推送消息 
redis->>task:消息

```


## 参考
https://www.cnblogs.com/xuzhiwei/p/4569315.html
https://github.com/MicrosoftArchive/redis/releases
