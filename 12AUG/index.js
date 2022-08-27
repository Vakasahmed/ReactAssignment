const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};


console.log(users);
const ans = Object.values(users);
// const key = (Object.keys(users));
console.log(ans)
// const a = ans.map(e=>e.skills)
// console.log(a)

const arr = Object.entries(users)
console.log(arr)
// const c = arr.flat()

// console.log(c)
// let a = Object.values(users)
// const b = a.map(e=>Object.values(e))
// console.log(b)
// const c = a.map(e=>Object.keys(e))
// // console.log(c)

// const a = ans.filter(e=>e.points>=40)
// console.log(a)

const key = (Object.values(users)).map(e=>e.points>=40)
// console.log(Object.keys(key))
console.log(key)

// const a = Object.values(users)
// console.log(a)
// const b = a.filter(e=>e.points>=40)
// console.log(b)
    

const a = Object.entries(users)
// const b = a.map(e=>e.point>=40)
// console.log(a)
// console.log(b)
 const c = a.flat()
 console.log(c)
 const d = c.map(e=>{
  if(e.points>=40){
    return (e.email).slice(0,4)
  }
 })
console.log(d)
let b = Object.values(a).map(e=>{
  if(e[1].points>=40){
    return e[0];
  }
})
console.log(b)


