let resume = `
Infinite Loop Inc., 2017 - 2019
- wrote migration scripts for SQL databases
- built reusable UI components with React

Varlet Agency, 2016 - 2017
- created user interfaces using JS, React, and CSS
- built API services with NodeJS and MongoDB

InfoSysDigiTechSphere Consulting Solutions, 2015 - 2016
- built API services with in Java, Spring Boot, and SQL
`;

let str = resume.split(' ');

const keywords = [
    "React",
    "UI",
    "NodeJS",
    "Spring",
    "MongoDB"
];

const keywordsOccurence = str.reduce((counts, text) => {
    const textLowerCase = text.toLowerCase();

    keywords.forEach((keyword) => {
        let occurences = text.split(keyword).length - 1;

        if(!counts[keyword]) {
            counts[keyword] = 0;
        }
        counts[keyword] += occurences
    });
    return counts
}, {})

console.log(keywordsOccurence);
// console.log(str);
