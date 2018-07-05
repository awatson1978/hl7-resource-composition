Meteor.methods({
    createCompositions:function(conditionObject){
    check(conditionObject, Object);

    if (process.env.NODE_ENV === 'test') {
        console.log('Creating Compositions...');
        Compositions.insert(conditionObject, function(error, result){
        if (error) {
            console.log(error);
        }
        if (result) {
            console.log('Compositions created: ' + result);
        }
        });
    } else {
        console.log('This command can only be run in a test environment.');
        console.log('Try setting NODE_ENV=test');
    }
    },
    initializeCompositions:function(){

    if (Compositions.find().count() === 0) {
        console.log('No records found in Compositions collection.  Lets create some...');

        // TODO:  we can't have empty strings in the record;
        // but we want to eventually get the following fields into the record
        var multipleSclerosis = {
         'resourceType' : 'Compositions'
        };

        Meteor.call('createCompositions', multipleSclerosis);
    } else {
        console.log('Compositions already exist.  Skipping.');
    }
    },
    dropCompositions: function(){
    if (process.env.NODE_ENV === 'test') {
        console.log('-----------------------------------------');
        console.log('Dropping conditions... ');
        Compositions.find().forEach(function(condition){
        Compositions.remove({_id: condition._id});
        });
    } else {
        console.log('This command can only be run in a test environment.');
        console.log('Try setting NODE_ENV=test');
    }
    }
});
    
