//Question1
var arr = [2, 3, 5, 7, 9]
    arr.forEach(function(element){
    console.log(Math.pow(element,2))
    });

//Question2
var arr = [1, 2, 3, 4]
var result = arr.map(function(el){
    return el + el
}) 
console.log(result)

//Question3
var arr = [1,2,3]
var result = arr.filter(function(el){
    return el % 3 == 0
})
console.log(result)

//Question4
var arr = [2,3,4]
var result = arr.reduce(function(ne,el){
    return ne * el
})
console.log(result)

//Question5
var arr = ["Edstem", "Tech", "Javascript"]
arr.forEach(function(element){
    console.log(element.length)
    });
    
//Question6
var arr = ["Edstem", "Tech"]
var result = arr.map(function(el){
    return el[0]
}) 
console.log(result)

//Question7
var arr = ["assignment", "problem", "media", "upload"]
var result = arr.filter(function(el){
    return el[0] === 'a' || el[el.length - 1] === 'a'
}) 
console.log(result)

//Question8
var arr = ["edstem", "tech"]
var result = arr.reduce(function(ne, el){
    return ne + "_" +el
}) 
console.log(result)

//Question9
var user = {
    name : 'Ravi',
    age : 22,
    gender : 'M',
    skills : ['html', 'css', 'react'],
    addSkill: function(skill){
        return this.skills.push(skill)
    },
    getSkills: function(){
        return this.skills
    }
}
user.addSkill('Javascript')
console.log(user.skills);
console.log(user.getSkills());