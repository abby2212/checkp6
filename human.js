
class Human {
    name;
    job;
    skills;
    constructor() {
        name = '';
        job = '';
        skills = [];
    }
    getJob(job) { this.job = job }
    leaveJob() { this.job = "unemployed" }
    learnNewSkill(skill) { this.skills.push(skill) }
    forgetSkill(skill) {
        skills=this.skills.filter(element =>  element != skill)
       
   
    }
}
class Student extends Human {
constructor(){super()}


}
const me = new Student();

me.getJob('Web developer');

me.learnNewSkill('React');

me.forgetSkill('React');

me.leaveJob();












