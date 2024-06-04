const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/studentsDetails')
.then(()=>console.log('Database succesfully connected'))
.catch(()=>console.log('Not connected'));

const academicSchema=new mongoose.Schema({
    studentId:Number,
    name:String,
    avgGrade:String,
    subjects:String,
    active:Boolean
});

const cocurricularSchema=new mongoose.Schema({
    studentId:Number,
    name:String,
    activityType:String,
    achievements:String,
    active:Boolean
});

//creating collection

const academicDetails=new mongoose.model('academicDetails',academicSchema);
const cocurricularDetails=new mongoose.model('co_curricularDetails',cocurricularSchema);

// //populating
// const createAcademic=async()=>{
//     try{
//         const aData=await academicDetails.create([
//         {
//             studentId:101,
//             name:'Richard',
//             avgGrade:'B',
//             subjects:'English,Maths,Physics,Chemistry,Computer Science',
//             active:true
//         },
//         {
//             studentId:102,
//             name:'Steve',
//             avgGrade:'A',
//             subjects:'English,Maths,Physics,Chemistry,Computer Science',
//             active:true
//         },
//         {
//             studentId:103,
//             name:'Stark',
//             avgGrade:'A',
//             subjects:'English,Maths,Physics,Chemistry,Biology',
//             active:true
//         },
//         {
//             studentId:104,
//             name:'Tony',
//             avgGrade:'B',
//             subjects:'English,Maths,Physics,Chemistry,Biology',
//             active:true
//         }
//         ])
//     }
//     catch(e){
//         console.log('error');
//     }
// };
// createAcademic();

// const createCocurricular=async()=>{
//     try{
//         const cData=await cocurricularDetails.create([
//         {
//             studentId:101,
//             name:'Richard',
//             activityType:'Sports',
//             achievements:'Best player award in BadmittonChampions,2023',
//             active:true
//         },
//         {
//             studentId:102,
//             name:'Steve',
//             activityType:'Sports',
//             achievements:"Prime Minister's Awards for Yoga at National Level ,2022",
//             active:true
//         },
//         {
//             studentId:103,
//             name:'Stark',
//             activityType:'Quiz',
//             achievements:'Title Winner in Inter State Quiz Competition',
//             active:true
//         },
//         {
//             studentId:104,
//             name:'Tony',
//             activityType:'Sports',
//             achievements:'none',
//             active:true
//         }
//         ])
//     }
//     catch(e){
//         console.log('error');
//     }
// };
// createCocurricular();
    
//Reading

const getDocument=async()=>{
    //const result=await academicDetails.find();
    const r=await academicDetails.find({avgGrade:'A'},{name:1,_id:0});
    const r1=await academicDetails.find({subjects:'English,Maths,Physics,Chemistry,Biology'},{active:0,_id:0,__v:0})
    const r2=await cocurricularDetails.find({achievements:'none'},{name:1,_id:0,activityType:1});
    const r3=await cocurricularDetails.find({activityType:'Sports'},{name:1,_id:0});
    console.log('\n\nA Grade Students\n',r);
    console.log('\n\nBiology Students\n',r1);
    console.log('\n\nNone Achievement Students\n',r2);
    console.log('\n\nSports Students\n',r3);
};
getDocument();

//inserting
academicDetails.insertOne({
        studentId:104,
        name:'Zaran',
        avgGrade:'B',
        subjects:'English,Maths,Physics,Chemistry,Computer Science',
        active:true    
});
