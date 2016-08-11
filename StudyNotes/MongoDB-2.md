# MongoDB

## mongdo shell
MongoDB客户端在每次打开的时候都会去检查在用于目录下有没有`.mongorc.js`文件， 如果有， 就会执行。 所以， 如果要定制shell的话， 可以从这里入手。例如

`~/mongorc.js`
```js
host=db.serverStatus().host;
prompt = function () {
  return '[' + host + '@' + db + ']$: ';
}

```
然后`mongo shell`看起来大概就这样： `[JiangGuoxi:12345@test]$:`



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

