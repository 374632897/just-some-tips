# MongoDB

## mongo shell
### mongorc.js
MongoDB客户端在每次打开的时候都会去检查在用户家目录下有没有`.mongorc.js`文件， 如果有， 就会执行。 所以， 如果要定制shell的话， 可以从这里入手。例如

`~/.mongorc.js`
```js
host=db.serverStatus().host;
prompt = function () {
  return '[' + host + '@' + db + ']$: ';
}

```
然后`mongo shell`看起来大概就这样： `[JiangGuoxi:12345@test]$:`
你可以通过在打开客户端的时候指定参数 `--norc`来阻止调用`.mongorc.js`

### 设置外部编辑器
在开始运行`mongo shell`之前， 你可以通过设置EDITOR环境变量来指定编辑器

```
export EDITOR='vim';
mongo
```
但是感觉这玩意儿好像不好使， 也许是方法不对。

### 设置默认查询数量
`mongodb`默认查询数量为20条， 如果要设置默认查询数量， 可以通过以下方法

```
DBQuery.shellBatchSize = 10;
```

### 数据类型
* Date
* ObjectID
* NumberLong（长整型？）
默认情况下， MongoDB使用浮点值（非长整型）， 如果使用$inc来自增的值是一个浮点值的话， 那么长整型的值将会被转化为浮点值。

```mongodb
db.collection.insert({_id: 1, calc: NumberLong(1)});
db.collection.update({_id: 1}, {$inc: {calc: 5}});
db.collection.find(); -- { "_id" : 1, "calc" : 6 }


```
* NumberInt

### Mongo Shell 类型检查
查看字段类型， 可以使用`typeof`和`instanceof`
* instanceof 返回一个布尔值
* typeof 返回字段类型


### 一些指令
* db
`db`是对当前数据库的引用， 输入db即可显示当前数据库的名称
* use <database>
使用此命令可以指定要使用的数据库， 你可以切换到一个不存在的数据库， 但是只有在你向这个数据库中插入数据的时候， MongoDB才会真正创建数据库
* show dbs
列出所有可用数据库
* db.col
访问一个集合。如果集合的命名不符合`Mongo shell`规范(比如有连字符，空格， 或者以数字开头)，那么可以使用以下两种方法来访问

```
db['3test'].find()
db.getCollection('3test')
```

### 格式化输出结果
* `db.col.find().pretty()`输出美化
* 下面三种没有找到用法
* `print()`
* `print(tojson(<obj>))`
* `printjson()`

### 多行模式
如果你以'('或者'{'或者'['作为一行的结尾， 那么他后面的项将会以'...'开头， 直到你输入其他的对应符号来关闭他们。你可以通过输入两行空格来退出多行模式

### 退出shell
输入`exit`或者`quit()`或者按下`ctrl + c`


### CRUD

#### QUERY

* 支持`.`号访问， 但是要加引号

```
db.users.find({'favorites.artist': 'Miro'})
```

##### Query Method
`db.col.find(<query filter>, <projection>)`
* query filter 指定要返回的文档
* projection指定要从匹配文档中返回哪些字段
* 指定and条件：

```
db.users.find({status: 'A', age: { $lt: 18 });
```
* 指定or条件：
使用$or操作符， 值为一个数组， 那么， 满足数组中任一条件的都将被返回。

```
db.num.find({$or: [{num: 1}, {num: 2}, {num: 3}]})
```

#### UPDATE

* 原子性： 所有针对单文档的操作都是[原子级](https://docs.mongodb.com/manual/core/write-operations-atomicity/)的。
* _id字段： 此字段一旦设置， 将不能被再次更新。
* 字段顺序：
  * `_id`始终是第一位
  * Updates that include renaming of field names may result in the reordering of fields in the document.
* update操作方式
  * db.col.update()
    * 要针对查找到的多个值进行修改， 传递第三个参数为： {multi: true}
  * db.col.updateOne()
  * db.col.updateMany()
  * db.col.replaceOne()






















# help
## db -- `db.help()`
* db.adminCommand(nameOrDocument) -- 切换到admin数据库并且执行命令（调用`db.runCommand()`）
* db.auth(username, password)
* db.cloneDataBase(fromhost)
* db.commandHelp(name) returns the help for the command
* db.copyDatabase(fromdb, todb, fromhost)
* db.createCollection(name, { size : ..., capped : ..., max : ...} )
* db.createUser(userDocument)
* db.currentOp() displays currently executing operations in the db
* db.dropDatabase()
* db.eval() - deprecated
* db.fsyncLock() flush data to disk and lock server for backups
* db.fsyncUnlock() unlocks server following a db.fsyncLock()
* db.getCollection(cname) same as db['cname'] or db.cname
* db.getCollectionInfos([filter]) - returns a list that contains the names and options of the db's collections
* db.getCollectionNames()
* db.getLastError() - just returns the err msg string
* db.getLastErrorObj() - return full status object
* db.getLogComponents()
* db.getMongo() get the server connection object
* db.getMongo().setSlaveOk() allow queries on a replication slave server
* db.getName()
* db.getPrevError()
* db.getProfilingLevel() - deprecated
* db.getProfilingStatus() - returns if profiling is on and slow threshold
* db.getReplicationInfo()
* db.getSiblingDB(name) get the db at the same server as this one
* db.getWriteConcern() - returns the write concern used for any operations on this db, inherited from server object if set
* db.hostInfo() get details about the server's host
* db.isMaster() check replica primary status
* db.killOp(opid) kills the current operation in the db
* db.listCommands() lists all the db commands
* db.loadServerScripts() loads all the scripts in db.system.js
* db.logout()
* db.printCollectionStats()
* db.printReplicationInfo()
* db.printShardingStatus()
* db.printSlaveReplicationInfo()
* db.dropUser(username)
* db.repairDatabase()
* db.resetError()
* db.runCommand(cmdObj) run a database command.  if cmdObj is a string, turns it into { cmdObj : 1 }
* db.serverStatus()
* db.setLogLevel(level,<component>)
* db.setProfilingLevel(level,<slowms>) 0=off 1=slow 2=all
* db.setWriteConcern( <write concern doc> ) - sets the write concern for writes to the db
* db.unsetWriteConcern( <write concern doc> ) - unsets the write concern for writes to the db
* db.setVerboseShell(flag) display extra information in shell output
* db.shutdownServer()
* db.stats()
* db.version() current version of the server


## collection -- db.mycoll.help()
* db.mycoll.find()

  ```mongodb
  find(<predicate>, <projection>) modifiers
        .sort({...})
        .limit(<n>)
        .skip(<n>)
        .batchSize(<n>) - sets the number of docs to return per getMore
        .hint({...})
        .readConcern(<level>)
        .readPref(<mode>, <tagset>)
        .count(<applySkipLimit>) - total # of objects matching query. by default ignores skip,limit
        .size() - total # of objects cursor would return, honors skip,limit
        .explain(<verbosity>) - accepted verbosities are {'queryPlanner', 'executionStats', 'allPlansExecution'}
        .min({...})
        .max({...})
        .maxScan(<n>)
        .maxTimeMS(<n>)
        .comment(<comment>)
        .snapshot()
        .tailable(<isAwaitData>)
        .noCursorTimeout()
        .allowPartialResults()
        .returnKey()
        .showRecordId() - adds a $recordId field to each returned object
  ```

  ```mongodb
  Cursor methods
        .toArray() - iterates through docs and returns an array of the results
        .forEach(<func>)
        .map(<func>)
        .hasNext()
        .next()
        .close()
        .objsLeftInBatch() - returns count of docs left in current batch (when exhausted, a new getMore will be issued)
        .itcount() - iterates through documents and counts them
        .getQueryPlan() - get query plans associated with shape. To get more info on query plans, call getQueryPlan().help().
        .pretty() - pretty print each document, possibly over multiple lines
  ```
------------------------------------

* db.mycoll.bulkWrite( operations, <optional params> ) - bulk execute write operations, optional parameters are: w, wtimeout, j
* db.mycoll.count( query = {}, <optional params> ) - count the number of documents that matches the query, optional parameters are: limit, skip, hint, maxTimeMS
* db.mycoll.copyTo(newColl) - duplicates collection by copying all documents to newColl; no indexes are copied.
* db.mycoll.convertToCapped(maxBytes) - calls {convertToCapped:'mycoll', size:maxBytes}} command
* db.mycoll.createIndex(keypattern[,options])
* db.mycoll.createIndexes([keypatterns], <options>)
* db.mycoll.dataSize()
* db.mycoll.deleteOne( filter, <optional params> ) - delete first matching document, optional parameters are: w, wtimeout, j
* db.mycoll.deleteMany( filter, <optional params> ) - delete all matching documents, optional parameters are: w, wtimeout, j
* db.mycoll.distinct( key, query, <optional params> ) - e.g db.mycoll.distinct( 'x' ), optional parameters are: maxTimeMS
* db.mycoll.drop() drop the collection
* db.mycoll.dropIndex(index) - e.g. db.mycoll.dropIndex( "indexName" ) or db.mycoll.dropIndex( { "indexKey" : 1 } )
* db.mycoll.dropIndexes()
* db.mycoll.ensureIndex(keypattern[,options]) - DEPRECATED, use createIndex() instead
* db.mycoll.explain().help() - show explain help
* db.mycoll.reIndex()
* db.mycoll.find([query],[fields]) - query is an optional query filter. fields is optional set of fields to return.
                                              e.g. db.mycoll.find( {x:77} , {name:1, x:1} )
* db.mycoll.find(...).count()
* db.mycoll.find(...).limit(n)
* db.mycoll.find(...).skip(n)
* db.mycoll.find(...).sort(...)
* db.mycoll.findOne([query], [fields], [options], [readConcern])
* db.mycoll.findOneAndDelete( filter, <optional params> ) - delete first matching document, optional parameters are: projection, sort, maxTimeMS
* db.mycoll.findOneAndReplace( filter, replacement, <optional params> ) - replace first matching document, optional parameters are: projection, sort, maxTimeMS, upsert, returnNewDocument
* db.mycoll.findOneAndUpdate( filter, update, <optional params> ) - update first matching document, optional parameters are: projection, sort, maxTimeMS, upsert, returnNewDocument
* db.mycoll.getDB() get DB object associated with collection
* db.mycoll.getPlanCache() get query plan cache associated with collection
* db.mycoll.getIndexes()
* db.mycoll.group( { key : ..., initial: ..., reduce : ...[, cond: ...] } )
* db.mycoll.insert(obj)
* db.mycoll.insertOne( obj, <optional params> ) - insert a document, optional parameters are: w, wtimeout, j
* db.mycoll.insertMany( [objects], <optional params> ) - insert multiple documents, optional parameters are: w, wtimeout, j
* db.mycoll.mapReduce( mapFunction , reduceFunction , <optional params> )
* db.mycoll.aggregate( [pipeline], <optional params> ) - performs an aggregation on a collection; returns a * cursor
db.mycoll.remove(query)
* db.mycoll.replaceOne( filter, replacement, <optional params> ) - replace the first matching document, optional parameters are: upsert, w, wtimeout, j
* db.mycoll.renameCollection( newName , <dropTarget> ) renames the collection.
* db.mycoll.runCommand( name , <options> ) runs a db command with the given name where the first param is the collection name
* db.mycoll.save(obj)
* db.mycoll.stats({scale: N, indexDetails: true/false, indexDetailsKey: <index key>, indexDetailsName: <index name>})
* db.mycoll.storageSize() - includes free space allocated to this collection
* db.mycoll.totalIndexSize() - size in bytes of all the indexes
* db.mycoll.totalSize() - storage allocated for all data and indexes
* db.mycoll.update( query, object[, upsert_bool, multi_bool] ) - instead of two flags, you can pass an object with fields: upsert, multi
* db.mycoll.updateOne( filter, update, <optional params> ) - update the first matching document, optional parameters are: upsert, w, wtimeout, j
* db.mycoll.updateMany( filter, update, <optional params> ) - update all matching documents, optional parameters are: upsert, w, wtimeout, j
* db.mycoll.validate( <full> ) - SLOW
* db.mycoll.getShardVersion() - only for use with sharding
* db.mycoll.getShardDistribution() - prints statistics about data distribution in the cluster
* db.mycoll.getSplitKeysForChunks( <maxChunkSize> ) - calculates split points over all chunks and returns splitter function
* db.mycoll.getWriteConcern() - returns the write concern used for any operations on this collection, inherited from server/db if set
* db.mycoll.setWriteConcern( <write concern doc> ) - sets the write concern for writes to the collection
* db.mycoll.unsetWriteConcern( <write concern doc> ) - unsets the write concern for writes to the collection



## help admin
* ls([path])                      list files
* pwd()                           returns current directory
* listFiles([path])               returns file list
* hostname()                      returns name of this host
* cat(fname)                      returns contents of text file * as a string
* removeFile(f)                   delete a file or directory
* load(jsfilename)                load and execute a .js file
* run(program[, args...])         spawn a program and wait for * its completion
* runProgram(program[, args...])  same as run(), above
* sleep(m)                        sleep m milliseconds
* getMemInfo()                    diagnostic


## help misc
* b = new BinData(subtype,base64str)  create a BSON BinData value
* b.subtype()                         the BinData subtype (0..255)
* b.length()                          length of the BinData data in bytes
* b.hex()                             the data as a hex encoded string
* b.base64()                          the data as a base 64 encoded string
* b.toString()

* b = HexData(subtype,hexstr)         create a BSON BinData value from a hex string
* b = UUID(hexstr)                    create a BSON BinData value of UUID subtype
* b = MD5(hexstr)                     create a BSON BinData value of MD5 subtype
* "hexstr"                            string, sequence of hex characters (no 0x prefix)

* o = new ObjectId()                  create a new ObjectId
* o.getTimestamp()                    return timestamp derived from first 32 bits of the OID
* o.isObjectId
* o.toString()
* o.equals(otherid)

* d = ISODate()                       like Date() but behaves more intuitively when used
* d = ISODate('YYYY-MM-DD hh:mm:ss')    without an explicit "new " prefix on construction

