const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Fred";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor arguments", () => {
    const id = 2;
    const e = new Employee("test", id); 
    expect(e.id).toBe(id);
})

//test email

test("Should return name via method getName()", () => {
    const name = "Fred";
    const e = new Employee(name);
    expect(e.getName()).toBe(name);
})

