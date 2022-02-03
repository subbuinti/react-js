const fullName = (user) => user.firstName + " " + user.lastName;
const user = { firstName: "Rahul", lastName: "attluri" };
const element = (
  <div>
    <h1 className="greeting">Hello, {fullName(user)}</h1>
    <p>welcome</p>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
