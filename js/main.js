var arr = [2, 3, 4, 15, 19, 11 ,75 ,33 ,18 ,28 ,31 , 39, 45 , 40, 57 ,51 ,70 ,65 ,71 ,78 ,89 ,81 ,86]
console.log('20 dan 50 gacha son');
console.log(arr.filter((item)=>(item > 20 && item < 50)));

console.log('50 dan katta tog son');
console.log(arr.filter((item)=>(item > 50 && item % 2 == 0 )));

var arr = ['Abdumuxtorov','Abdumuxtorova','Tirkashboyev','Tirkashboyeva','Pattiev','Patieva','ravshanbekov']
console.log(arr.filter((item)=>(item[item.length - 1] == 'a' )));