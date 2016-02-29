#mongoDB
-----

1. 连接到mongodb到指定数据库
   
   在mongoDB的bin目录下运行命令

    ```sh
    mongod -dbpath F:/data
    ```
  * ```db```命令用于显示当前数据库或对象的集合
  * ```use```命令用于连接到一个指定的数据库， 如果数据库不存在， 则创建
  * ```show dbs```用于查看数据库列表， 不会显示空数据库， 所以新建数据库需要插入值
  * ```db.database.insert({key: value})```用于插入数据。
  * ```db.dropDatabase()```删除当前数据库

2. 插入文档
  * 使用```insert()```或者```save()```方法
  * ```db.collection.find()```用于查找数据库
  * ```db.collection.save()```如果指定了_id字段， 将会更新字段
3. 更新文档
  * ```db.collection.update({"age": 22}, {$set: {"age": 23}});```
  *   
    ```mongdodb
    db.collection.update(
      <query>,
      <update>,
      {
        upsert: <boolean>,
        multi: <boolean>,
        writeConcern: <boolean>
      }

    )
    ```