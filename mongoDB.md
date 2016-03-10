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
    ```mongodb
    db.collection.update(
      <query>,
      <update>,
      {
        upsert: <boolean>,      # 如果不存在记录是否更新 默认为false
        multi: <boolean>,       # 是否更新查出来的多条记录， 默认为false
        writeConcern: <boolean> # 抛出异常的级别
      }
    )

    ```
5. 删除文档
   
   * ``db.collection.remove(<query>, <justOne>)``

6. 查询文档
   * ``db.collection.find()``           --- 用非结构化的方式来显示文档
   * ``db.collection.find().pretty()``  --- 用更易读的方式来显示文档。 
   * ``db.collection.findOne()``        --- 只返回一个文档  
   * ``db.col.find({"likes":50}).pretty()``         -- 等于
   * ``db.col.find({"likes":{$lt:50}}).pretty()``   -- 小于
   * ``db.col.find({"likes":{$lte:50}}).pretty()``  -- 小于等于
   * ``db.col.find({"likes":{$gt:50}}).pretty()``   -- 大于
   * ``db.col.find({"likes":{$gte:50}}).pretty()``  -- 大于等于
   * ``db.col.find({"likes":{$ne:50}}).pretty()``   -- 不等于
   * ``or``语句使用``$or``

     ```mongodb
      db.Jason.find({$or: [{age: 22}, {name: "Jason"}]}); # 注意$or的值为一个数组，数组项为对象
     ```

7. ```use [databasename]```表示使用该数据库
   
   ```db.person.insert()```在使用该数据库后执行上述命令则表示在该数据库的person集合下插入数据
8. ``$type``用于查找时过滤指定的数据类型
9. ```db.COLLECTION_NAME.find().limit(NUMBER)```指定从集合中读取指定的条数
10. `````
10. ``db.COLLECTION_NAME.find().limit(NUMBER).skip(NUMBER)``skip方法用来跳过指定数量的数据。默认参数为0
11. ``db.COLLECTION_NAME.find().sort({KEY:1})``按照指定键进行排序用1和-1指定排序方式， 1为升序， -1为降序。 默认按照文档的升序排列

12. ``db.COLLECTION_NAME.ensureIndex({KEY:1})``使用ensureIndex(）来方法来创建索引，1表示升序。也可以使用多个字段来创建索引
13.   
   ``mongodb
   db.COLLECTION_NAME.aggregate([{
     $group: {
       _id: '$age', #$age表示按照age字段来聚合
       num_tutorial: {$sum: 1} #$sum表示求和
     }
   }]);
  ``
14. ```$project```
  

   ```mongodb
   db.books.aggregate({
     $project: {
       _id: 0, # 在没有显示地将id设为0的情况下返回的字段中是包含id的。
       name: 1 # 设1的表示返回该字段
     }
   });
  ```

15. ```$match```  
    ```mongodb
     db.books.aggregate({
       $match: {
         name: "JavaScript高级程序设计"
       }
    }); # 返回name字段为指定值的文档
    ```

16. ```mongod --port "PORT" --dbpath "YOUR_DB_DATA_PATH" --replSet "REPLICA_SET_INSTANCE_NAME"```  
  
    mongoDB副本集设置

17. ``show tables``即可查看当前集合
18. 向一个不存在的集合中插入文档的时候， 对应的数据库会创建一个集合，判断模型名是否可数，如果不可数，则使用该模型名作为集合名， 如果可数，则使用该模型名的复数形式作为集合名。

19. we can use ``this.model([modelName])`` when we define methods of Schema to get the model now used. 




##Problems
====
1. I can't get the value of the Object[key] in jade when I try to traversal an array with ``each item in persons``.
2. If you try to save the entity with the data undefined in Schema, it will be failed, it means the undefined data will not save into the database sucessfully.
3. When I update the version of git, I can't run the command ``mongod --dbpath [path]`` under the right directory. I don't know what cuz this.  
