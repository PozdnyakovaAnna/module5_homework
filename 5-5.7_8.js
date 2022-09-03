let job = new Map();
job.set("Frontend developer", "html, css, Javascript");  
job.set("Backend developer", "Python, PostgreSQL, Git");
job.set("QA Engineer", "Ручное тестирование, Jira, SQL, Python");
job.set("Аналитик", "Rest, SQL, Python");
for (let pair of job) {
  console.log(`Ключ - ${pair[0]}, значение - ${pair[1]}`);
}