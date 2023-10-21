


// 1. get MongoDB module
var mongoose = require('mongoose');
// 2. set DB 
mongoose.connect('mongodb+srv://ojnim:6vrroBKDSAP7Hea9@hh23.godwcan.mongodb.net/?retryWrites=true&w=majority');
// 3. use connected DB
var db = mongoose.connection;
// 4. Connectting fail
db.on('error', function(){
    console.log('Connection Failed!');
});
// 5. Connection success
db.once('open', function() {
    console.log('Connected!');
});

// 6. Create Schema
var developer = mongoose.Schema({
    name : 'string',
    physical : 'number',
    mental : 'number',
    wellbeing : 'number'
});

// 7. 정의된 스키마를 객체처럼 사용할 수 있도록 model() 함수로 컴파일
var Developer = mongoose.model('Schema', developer);

// 8. Input value in schema
var newDeveloper = new Developer({name:'', physical : '', mental : '', wellbeing : ''});

// 9. Save Data
newDeveloper.save(function(error, data){
    if(error){
        console.log(error);
    }else{
        console.log('Saved!')
    }
});

// 10. get data from Developer reference 
Developer.find(function(error, developer){
    console.log('--- Read all ---');
    if(error){
        console.log(error);
    }else{
        console.log(developers);
    }
})

// 11. get specific developer's data
Developer.findOne({_id:''}, function(error,developer){
    console.log('--- Read one ---');
    if(error){
        console.log(error);
    }else{
        console.log(developer);
    }
});

// 12. put specific developer information
Developer.findById({_id:''}, function(error,developer){
    console.log('--- Update(PUT) ---');
    if(error){
        console.log(error);
    }else{
        developer.name = '--modified--';
        developer.save(function(error,modified_developer){
            if(error){
                console.log(error);
            }else{
                console.log(modified_developer);
            }
        });
    }
});

// 13. Delete
Developer.remove({_id:''}, function(error,output){
    console.log('--- Delete ---');
    if(error){
        console.log(error);
    }

    console.log('--- deleted ---');
});