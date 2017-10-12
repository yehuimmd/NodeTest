# NodeTest
使用node+express+MongoDB+html搭建的一个简单图书管理网站

--- 


- 建站前需了解：
npm 包管理器、node模块、包的概念，前后端分离，模板的渲染、mongodb数据库、数据库操作，数据库的链接、用Romogondb工具可视化数据库及连接操作等。

- 文件目录

      - db#用来存放启动数据库的数据
      - models#用来存放对象在数据库中模型
      - node_modules#用来存放项目所需的模板
      - public#用来放前端的js、css、images文件
      - routes#存放后端路由
      - schemas#用来存放对象所需的字节信息
      - views#存放视图模板的目录
      - app.js#项目的入口文件
      - package.json#包管理文件
 
- 网站功能介绍
这是一个关于图书管理，共四个页面的网站，首页、后台数据录入页、列表数据页（用来获取数据库中的全部数据展现在页面上）、详情页（每一个id对应的数据页），然后链接数据库，实现数据库的添加、查找、修改、删除操作。。

- 效果展示

      - 首页
      ![](http://images.morethink.cn/yehui2.png)
      - 后台管理
      ![](http://images.morethink.cn/yehui5.png)
      - 列表页
      ![](http://images.morethink.cn/yehui4.png)
      - romongodb工具使用
      ![](http://images.morethink.cn/yehui3.png)
