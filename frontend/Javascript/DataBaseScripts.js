db.skills.insertMany([
    {
        'name': 'JavaScrpt',
        'level': 7,
        'category': 'IT'
    },
    {
        'name': 'HTML',
        'level': 8,
        'category': 'IT'
    },
    {
        'name': 'CSS',
        'level': 7,
        'category': 'IT'
    },
    {
        'name': 'C#',
        'level': 7,
        'category': 'IT'
    },
    {
        'name': 'Python',
        'level': 7,
        'category': 'IT'
    },
    {
        'name': 'SQL',
        'level': 7,
        'category': 'IT'
    }
])




db.projects.insertMany([
    {
      "name": "Portfolio Website",
      "technologies": ["HTML", "CSS", "JavaScript", "MongoDB", "Docker"],
      "category": "IT"
    },
    {
      "name": "Leerlingencylopedie",
      "technologies": ["WPF", "SQL"],
      "category": "IT"
    },
    {
      "name": "OOP Stopwatch",
      "technologies": ["HTML", "CSS", "JavaScript"],
      "category": "IT"
    }
  ]);
  
