System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Student;
    return {
        setters:[],
        execute: function() {
            Student = (function () {
                function Student(id, name, age, address) {
                    this.id = id;
                    this.name = name;
                    this.age = age;
                    this.address = address;
                }
                return Student;
            }());
            exports_1("Student", Student);
        }
    }
});
//# sourceMappingURL=student.js.map