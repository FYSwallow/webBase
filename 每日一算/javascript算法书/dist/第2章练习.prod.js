"use strict";function Student(){this.grade=[]}Student.prototype.addGrade=function(a){this.grade.push(a)},Student.prototype.averageGrade=function(){for(var a=0,r=0;r<this.grade.length;r++)a+=this.grade[r];return a/this.grade.length};var xiaoMing=new Student;xiaoMing.addGrade(65),xiaoMing.addGrade(78),xiaoMing.addGrade(67),xiaoMing.addGrade(34),xiaoMing.addGrade(98),xiaoMing.addGrade(97),xiaoMing.addGrade(76),console.log(xiaoMing.averageGrade());var arr=["早晨","中午","晚上","凌晨","天亮","天黑"],arr1=arr.sort(),arr2=arr.sort().reverse();console.log(arr1),console.log(arr2);