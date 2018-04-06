/**
 * Created by zhongchengyong on 2018/4/5.
 */
function Student(props){
  this.name = props.name || '匿名';
  this.age = props.age || 1;
}

Student.prototype.hello = function () {
  console.log('Hello,' + this.name );
};

function createStudent(props){
  return new Student(props || {})
}

xiaoming = createStudent({
  name: "xiaoming"
});

console.log(xiaoming.name);
console.log(xiaoming.hello());
