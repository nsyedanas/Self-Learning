const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/firstdb')
.then(()=>console.log('Database succesfully connected'))
.catch(()=>console.log('Not connected'));

const courseSchema=new mongoose.Schema({
    title:String,
    ctype:String,
    noVideos:Number,
    author:String,
    active:Boolean
})

//collection
const courseRecords=new mongoose.model('courseRecords',courseSchema);

// // //document
// // const reactData=new courseRecords({
// //     title:'React Js',
// //     ctype:'Front End',
// //     noVideos:45,
// //     author:'Richard',
// //     active:true    
// // })

// // reactData.save();

// //crud------ create read update delete



// //async await
// const createDocument=async()=>{
//     try{
//         const allData=await courseRecords.create([
//         {
//             title:'React Js',
//             ctype:'Front End',
//             noVideos:55,
//             author:'Richard',
//             active:true
//         },
//         {
//             title:'HTML',
//             ctype:'Front End',
//             noVideos:35,
//             author:'Richard',
//             active:true
//         },
//         {
//             title:'CSS',
//             ctype:'Front End',
//             noVideos:25,
//             author:'Richard',
//             active:true
//         },
//         {
//             title:'node',
//             ctype:'Back End',
//             noVideos:25,
//             author:'Richard',
//             active:true
//         }
//         ])
//     }
//     catch(e){
//         console.log('error');
//     }
// };
// createDocument();



// // read

const getDocument=async()=>{
    // const result=await courseRecords.find();
    //const result=await courseRecords.find({title:'HTML'});
    const result=await courseRecords.find({ctype:'Front End'},{title:1,_id:0});
    console.log(result);
};

getDocument();