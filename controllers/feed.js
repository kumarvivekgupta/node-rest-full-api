exports.getPosts=(req,res,next)=>{
    console.log('Controllers');
   res.status(200).json({
      posts:[
        {
            _id:'1',
          title:'First Post',
          content:'This is my first Post',
          imageUrl:'images/sc.png',
          creator:{
            name:'vivek'
          },
          createdAt:new Date()
        }
      ]
  });
};

exports.createPost=(req,res,next)=>{
   const title=req.body.name;
   const content=req.body.content;

  //database post added
    
    res.status(201).json({
       message:'Successfully connected',
       posts:{id:new Date().toISOString,title:title,content:content}
    });
}