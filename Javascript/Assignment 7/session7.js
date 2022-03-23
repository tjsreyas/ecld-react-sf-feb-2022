//Question1
var employee = ['radhe', 22, 'M']
var obj = {}
obj.name = employee[0]
obj.age = employee[1]
obj.gender = employee[2]
for(key in obj){
    var value = obj[key]
    console.log(key+"-"+value)
}

//Question2
var str = 'edstemee'
var obj = {}
var count = 1
for(var i=0;i<str.length;i++){
    if(obj[str[i]]){
        obj[str[i]] = obj[str[i]] + count
    }
    else{
        obj[str[i]] = count 
    }
}
for(key in obj){
    console.log(key+"-"+obj[key])
}

//Question3
var user = [
    {
        name : "Amal",
        phone: 88882555
    },
    {
        name : "Ravi",
        phone: 703455951
    }
]
for(var i=0;i<user.length;i++){
    if(user[i].name == "Ravi"){
        console.log(user[i].phone)
    }
}

//Question4
var arr = [10, 20, 30, 10, 40, -2]
var obj = {}
var count =1
for(var i=0;i<arr.length;i++){
    if(!obj[arr[i]]){
        obj[arr[i]] = count
    }
    else{
        delete obj[arr[i]]
    }
}
console.log(Object.keys(obj).join(','))

//Question5
var word1 = 'den'
var word2 = 'end'
var str1 = word1.split('').sort().join('')
var str2 = word2.split('').sort().join('')
if(word1.length !== word2.length){
    console.log("FALSE")
}
if(str1 === str2){
    console.log("TRUE");
}

//Question6
var database = [ 
    { 
        name: 'vicky', 
        age: 24, 
        married: false, 
        address: { 
            city: 'hyderabad', 
            state: 'andhra', 
            pincode: '516003' 
        }, 
        skills: 
        ['react', 'html', 'nodejs'], 
        experience: 2 
    }, 
    { 
        name: 'nirmal', 
        age: 20, 
        married: true, 
        address: { 
            city: 'hyderabad', 
            state: 'telengana', 
            pincode: '500004' 
        }, 
        skills: ['css', 'figma'], 
        experience: 4 
    }, 
    { 
        name: 'neeraj', 
        age: 26, 
        married: false, 
        address: { 
            city: 'bengaluru', 
            state: 'karnataka', 
            pincode: '510006' 
        }, 
        skills: ['aws', 'angular', 'nodejs'], 
        experience: 5 
    } 
]
for(var i=0;i<database.length;i++){
    if(database[i].address.city == 'hyderabad' && database[i].experience>3) {
        console.log(database[i].name)
    }
}
