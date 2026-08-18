const Template = "My name is <%this.name%> and my skills are: <ul><%for(let index in this.skills) {%> <li><%this.skills[index]%></li> <%}%></ul>";

const myData = {
    name: "Saharsh",
    skills: ["JavaScript", "C++", "Python", "SQL", "AWS", "Computer-Architecture"]
};

const finalHTML = TemplateEngine(Template, myData);

const container = document.getElementById("app-container");

container.innerHTML = finalHTML;