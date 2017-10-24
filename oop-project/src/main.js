//main class
class Student {
	constructor(name, department){
		this.name = name;
		this.department = department;
	}

	introduce() {
		return "I'm a student, and my name is " + this.name;
	}

	course() {
		return "I study " + this.department;
	}
}


//sub class
class Finalist extends Student {

	constructor(name, course, faculty) {
		super(name, course);
		super.course = course;
		this.name = name;
		this.faculty = faculty;
	
}
	status() {
		return "I'm a student, my name is " + this.name + " and I am from the faculty of " + this.course;
	}
}