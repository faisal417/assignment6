

const studentData=[
    ['Faisal','50','52','2','Male','Coxs Bazar','100'],
    ['Ruble','20','2','8','Male','Rangpur','1200'],
    ['Razzak','18','8','9','Male','Khagrachhari','1000'],
    ['Shahab','25','2','10','Male','Habiganj','1400'],
    ['Istiak','30','12','5','Male','Comilla','1000'],
    ['Reza','12','3','5','Male','Chittagong','500'],
    ['Sokina','16','5','7','Female','Dhaka','100'],
    ['Kamal','40','23','5','Male','Dhaka','1100'],
    ['Jarina','14','7','7','Female','Dhaka','700'],
    ['Fultosi','17','5','5','Female','Comilla','100'],
    ['Jamal','24','5','5','Male','Dhaka','100'],
    ['Fulbanu','18','8','7','Female','Rangpur','600'],
    ['Jabed','18','8','4','Male','Comilla','100'],
    ['Rohim','50','40','5','Male','Rangpur','200'],
    ['Khalek','10','2','7','Male','Dhaka','400'],
    ['Fulmati','12','3','8','Female','Comilla','200'],
    ['Malek','17','18','7','Male','Dhaka','600'],
    ['Ketrina','19','17','3','Female','Munshiganj','200'],
    ['Karina','22','17','9','Female','Comilla','100'],
    ['Salman','14','5','5','Male','Dhaka','100'],
    ['Azam','21','7','7','Male','Comilla','600'],
    ['Miraz','23','7','6','Male','Rangpur','100'],
    ['Taskin','20','52','4','Male','Chittagong','300'],
    ['Sariful','24','4','5','Male','Rangpur','100'],
    ['Dipika','21','55','4','Female','Dhaka','100'],
    ['Kitika','33','44','5','Female','Rangpur','100'],
    ['Riko','44','17','8','Male','Chittagong','700'],
    ['Diko','47','52','5','Male','Dhaka','200'],
    ['Jarina','50','16','7','Female','Chittagong','700'],
    ['Labib','22','23','5','Male','Dhaka','100'],
];
//Calculation of Total Admnission fees

let totalFee= 0;
studentData.sort().map((data,index) =>{
    console.log(`${index+1}. Name: ${data[0]}-Admnission fee: ${data[6]}`);
    totalFee += +data[6];
});

console.log(`
-------------------------------------
Total Admnission fees: ${totalFee}
`);

//  Find All Female Students
// studentData.sort().map((data,index) =>{
//     if(data[4]==='Female')
//     console.log(`${index+1}. Name: ${data[0]} - Gender: ${data[4]}`);
    
// });

// Find class wise student result

// studentData.sort().map((data,index) =>{
//     if(data[3]==='5')
//     console.log(`${index+1}. Name: ${data[0]} - Class: ${data[3]}`);
    
// });

//Location wise student result

// studentData.sort().map((data,index) =>{
//     if(data[5]==='Dhaka')
//     console.log(`${index+1}. Name: ${data[0]} - Location : ${data[5]}`);
    
// });

//find student between 10 - 25 age

// studentData.sort().map((data,index) =>{
//     if(data[2]>=10 && data[2]<=25)
//     console.log(`${index+1}. Name: ${data[0]} - Age : ${data[2]}`);
    
// });