const employees = [
  {
    "id": 1,
    "name": "Rajesh Kumar",
    "email": "1@1.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Prepare monthly report",
        "taskDescription": "Gather all sales data and prepare a report.",
        "taskDate": "2024-10-15",
        "category": "Reporting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Team meeting",
        "taskDescription": "Attend the weekly team sync meeting.",
        "taskDate": "2024-10-16",
        "category": "Meeting",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Client feedback analysis",
        "taskDescription": "Review client feedback for improvements.",
        "taskDate": "2024-10-17",
        "category": "Client",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 2,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 2,
    "name": "Priya Sharma",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Product research",
        "taskDescription": "Research on competitor products and market trends.",
        "taskDate": "2024-10-13",
        "category": "Research",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Update software",
        "taskDescription": "Install updates for project management software.",
        "taskDate": "2024-10-14",
        "category": "Maintenance",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Submit budget proposal",
        "taskDescription": "Prepare and submit the next quarter's budget proposal.",
        "taskDate": "2024-10-18",
        "category": "Finance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "name": "Anil Patel",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "System upgrade",
        "taskDescription": "Oversee the upgrade of the company's server system.",
        "taskDate": "2024-10-11",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Inventory check",
        "taskDescription": "Ensure all office supplies are stocked.",
        "taskDate": "2024-10-15",
        "category": "Inventory",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Security audit",
        "taskDescription": "Conduct a security audit for the building and IT systems.",
        "taskDate": "2024-10-20",
        "category": "Security",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Backup critical data",
        "taskDescription": "Backup all critical company data to the cloud.",
        "taskDate": "2024-10-16",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 4,
    "name": "Neha Verma",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Customer survey",
        "taskDescription": "Conduct surveys with recent clients for feedback.",
        "taskDate": "2024-10-14",
        "category": "Customer Service",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Website redesign",
        "taskDescription": "Work with the team to design the new company website.",
        "taskDate": "2024-10-18",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Write blog post",
        "taskDescription": "Write a new blog post on company achievements.",
        "taskDate": "2024-10-19",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 0,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 5,
    "name": "Ravi Mehta",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Recruitment planning",
        "taskDescription": "Plan recruitment for the upcoming quarter.",
        "taskDate": "2024-10-12",
        "category": "HR",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Train new employees",
        "taskDescription": "Conduct training sessions for new hires.",
        "taskDate": "2024-10-17",
        "category": "HR",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Budget forecast",
        "taskDescription": "Create a budget forecast for the next fiscal year.",
        "taskDate": "2024-10-21",
        "category": "Finance",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Set up employee evaluations",
        "taskDescription": "Plan and schedule employee performance evaluations.",
        "taskDate": "2024-10-15",
        "category": "HR",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 0,
      "failed": 0
    }
  }
];

  
  const admin = [
    {
      "id": 1,
      "email": "admin@me.com",
      "password": "123"
    }
  ];
  

  export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
  }

  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    return { employees, admin };
  }
