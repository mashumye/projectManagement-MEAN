
var express =require('express');
var router =express.Router();
var fs = require('fs');
var url =require('url');
var qs =require('querystring');
var mongojs =require('mongojs');

var db =mongojs('mongodb://teampm:teampm@ds053080.mlab.com:53080/projectsdb',['projects']);


router.get('/', function(req, res) {

    res.render('project.html', { title: 'This is the Project Management App.' });
});



router.get('/projects', function(req, res,next) {
    db.projects.find(function(err,projects){
        if(err){
            res.send(err);
        }
        else{
            res.json(projects);
        }
    })

});

router.get('/project/:id',function(req,res,next){
    db.projects.findOne({_id:mongojs.ObjectId(req.params.id)},function(err,project){
        if(err){
            res.send(err);
        }
        else{
            res.json(project);
        }

    });
});
router.get('/project',function(req,res,next){
    
    var title =req.query.title;
    console.log(title);
    db.projects.find({title:{'$regex':title}},function(err,project){
        if(err){
            res.send(err);
        }
        else{
            res.json(project);
        }

    });
});

router.delete('/project/:id',function(req,res,next){
    db.projects.remove({_id:mongojs.ObjectId(req.params.id)},function(err,project){
        if(err){
            res.send(err);
        }
        else{
            res.json(project);
        }

    });
});

//upadate data
router.put('/project/:id',function(req,res,next){

var project =req.body;
console.log(project);
console.log(project.tasks);

var updProj = {};

if(project.title){
    updProj.title=project.title;
}
if(project.description){
    updProj.description=project.description;
}

updProj.tasks=[];
//updProj.tasks.push(project.tasks);
  for(var i=0;i<project.tasks.length;i++){
        
    updProj.tasks[i]=project.tasks[i];
  }
    

console.log(updProj);

if(!updProj){
    res.status(4000);
    res.json({'error':'Bad Data'});
}
else{
   // console.log(updProj.tasks[0].title);
    db.projects.update({_id:mongojs.ObjectId(req.params.id)},updProj,{},function(err,project){
        if(err){
            res.send(err);
        }
        else{
            res.json(project);
        }

    });
}

    
});
//post data
router.post('/project', function(req, res) {
   var project =req.body;
   if(!project.title || !project.description){
       res.status(400);
       res.send({'error':'Bad Data!'});
   }
   else{
       db.projects.save(project,function(err,project){
        if(err){
            res.send(err);
        }
        else{
            res.json(project);
        }

    });
   }
  
});



module.exports = router;