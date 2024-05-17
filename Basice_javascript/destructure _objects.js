const course={
    course_name: "java in hindi",
    course_instructor: "Rohit Rajbhar",
    price: 400
}
// fetch keys- course.course_name

// by destructuring method
const {course_instructor: teacher} = course
console.log(teacher)

// definition of de-structure
//The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.




// {
//     course_name: "java in hindi",
//     course_instructor: "Rohit Rajbhar",
//     price: 400
// }
// if there is no name of any object then that will be considered as json