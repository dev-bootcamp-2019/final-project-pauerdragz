var FileContract = artifacts.require("./FileContract.sol");

contract('FileContract', function(accounts) {
    let myUserInstance;
    let owner    = accounts[0];
    let nonOwner = accounts[1];
    const username = "grandfleet"
    
    
    beforeEach(async () => {
    
        myFileContractInstance = await FileContract.deployed()
        assert.ok(myFileContractInstance)
    })
    it("...get the size of the FileContract contract", function() {
        return FileContract.deployed().then(function(instance) {
             var bytecode = instance.constructor._json.bytecode;
             var deployed = instance.constructor._json.deployedBytecode;
             var sizeOfB  = bytecode.length / 2;
             var sizeOfD  = deployed.length / 2;
             console.log("    size of bytecode in bytes = ", sizeOfB);
             console.log("    size of deployed in bytes = ", sizeOfD);
             console.log("    initialisation and constructor code in bytes = ", sizeOfB - sizeOfD);
        }); 
    });
    describe("...Add File", async() => {
    
        it("......Adding a File Item", async() =>  {
            console.log("      adding File Items")
            const tags = ["blockchain","ENGR001","games","life","anime"]
            const ipfsTags = ["0x68656c6c6f0000000000000000000000","0x68656c6c6f0000000000000000000000","0x68656c6c6f0000000000000000000000","0x68656c6c6f0000000000000000000000","0x68656c6c6f0000000000000000000000"]
            console.log(ipfsTags)
            for (var i = 0; i < ipfsTags.length; i++) {
                ipfsTags[i] = web3.fromAscii(tags[i])
            }
        
            
            const hash1 = "QmWWQSuPMS6aXCbZKpEjPHPUZN2NjB3YrhJTHsV4X3vb2t"
            const filename1 = web3.fromAscii("test1")
            // convert filenames to hex later 
            await myFileContractInstance.addFile(hash1,filename1,ipfsTags)
            const hash2 = "QmWWQSuPMS6aXCbZKpEjPHPUZN2NjB3YrhJTHsV4X3vb2t"
            const filename2 =  web3.fromAscii("test2")
            await myFileContractInstance.addFile(hash2,filename2,ipfsTags)
        });
        it("......Getting Number of Files",async() => {
            console.log("      getting number of Files")
            const lastIds = await myFileContractInstance.lastIds(owner)
            assert.strictEqual(2,lastIds.toNumber())
        })
        it("......Getting list of tags", async() => {
            const tags = ["blockchain","ENGR001","games","life","anime"]
            const returnedTags = await myFileContractInstance.getFileTags(owner,0)
            console.log(returnedTags)
            for (var j=0; j < 5; j++) {
                if (returnedTags[j] !== '0x0000000000000000000000000000000000000000000000000000000000000000') {
                  console.log('The returned tags are: ')
                  console.log(returnedTags[j])
                  returnedTags[j] = web3.toUtf8(returnedTags[j])
                  console.log('The returned tags are: null???')
                } else {
                  returnedTags[j] = 'N/A'
                }
            }
            console.log('The returned tags are: ')
            console.log(returnedTags)
            
        
        })
        /*
        it("Getting Data of all todos",async() => {
            let idsToCheck = [0,1] 
            const todoList = await myTodoListInstance.returnAllTodos([0, 1], { from: accounts[0]});
            console.log('      todos =',todoList )
            const todoData2 = await myTodoListInstance.returnAllTodos([1]);
            console.log('      todos =',todoData2 )
            console.log('      neatly printing results')
            // for clarity's sake, let's define some constants so that we can see
            // which field array we're accessing:
      
            const FIELD_IDS  = 0
            const FIELD_CONTENTS = 1
            const FIELD_OWNERS = 2
            const FIELD_ISCOMPLETEDS = 3
            const FIELD_TIMESTAMPS = 4

            let todoListStructs = []
            for (let i = 0; i < 2; i++) {
                const todo = {
                    ids:            todoList[FIELD_IDS][i].toNumber(),
                    contents:       web3.toUtf8(todoList[FIELD_CONTENTS][i]),
                    owners:         todoList[FIELD_OWNERS][i],
                    isCompleteds:   todoList[FIELD_ISCOMPLETEDS][i],
                    timestamps:     todoList[FIELD_TIMESTAMPS][i].toNumber()
                }
                todoListStructs.push(todo)
            }

            console.log('       todoListStructs =', todoListStructs)
        })
        **/
        /** 
        it("Authenticating a User", async() => {
            const usernameTst = await myUserInstance.authenticate()
            const usernameStr = web3.toUtf8(usernameTst)
            assert.strictEqual(username,usernameStr,"username is matchs up")
        });
        it("Getting a username", async() => {
            const usernameTst = await myUserInstance.get(owner)
            const usernameStr = web3.toUtf8(usernameTst)
            assert.strictEqual(username,usernameStr,"username is matchs up")
        });
        it("Destroying a User", async() => {
            const userDestroyedEvent = await myUserInstance.destroy()
            const userDestroyedAddress = utils.getParamFromTxEvent( userDestroyedEvent, '_address', null, 'UserDestroyed')
            assert.strictEqual(userDestroyedAddress,owner,"User is successful destroyed")
        });
        */
    });
});
