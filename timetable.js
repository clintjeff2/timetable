const courses = [
  {
    name: "Introduction to Computer Science",
    course_code: "CS101",
    specialties: ["Computer Science", "Software Engineering"],
    total_hours: 120,
    hours_weekly: 10,
  },
  {
    name: "Data Structures and Algorithms",
    course_code: "CS201",
    specialties: ["Computer Science", "Software Engineering"],
    total_hours: 140,
    hours_weekly: 12,
  },
  {
    name: "Database Systems",
    course_code: "CS301",
    specialties: ["Computer Science", "Information Technology"],
    total_hours: 100,
    hours_weekly: 8,
  },
  {
    name: "Operating Systems",
    course_code: "CS401",
    specialties: ["Computer Science", "Information Technology"],
    total_hours: 110,
    hours_weekly: 9,
  },
  {
    name: "Artificial Intelligence",
    course_code: "CS501",
    specialties: ["Computer Science", "Data Science"],
    total_hours: 130,
    hours_weekly: 10,
  },
  {
    name: "Machine Learning",
    course_code: "DS601",
    specialties: ["Data Science", "Artificial Intelligence"],
    total_hours: 140,
    hours_weekly: 11,
  },
  {
    name: "Big Data Analytics",
    course_code: "DS701",
    specialties: ["Data Science", "Information Technology"],
    total_hours: 150,
    hours_weekly: 12,
  },
  {
    name: "Software Engineering Principles",
    course_code: "SE101",
    specialties: ["Software Engineering", "Computer Science"],
    total_hours: 120,
    hours_weekly: 10,
  },
  {
    name: "Cyber Security Fundamentals",
    course_code: "CS601",
    specialties: ["Computer Science", "Cyber Security"],
    total_hours: 90,
    hours_weekly: 8,
  },
  {
    name: "Network Protocols and Architectures",
    course_code: "IT501",
    specialties: ["Information Technology", "Computer Networks"],
    total_hours: 100,
    hours_weekly: 9,
  },
  {
    name: "Cloud Computing",
    course_code: "IT601",
    specialties: ["Information Technology", "Cloud Technologies"],
    total_hours: 130,
    hours_weekly: 10,
  },
  {
    name: "Human-Computer Interaction",
    course_code: "CS701",
    specialties: ["Computer Science", "Software Engineering"],
    total_hours: 100,
    hours_weekly: 8,
  },
  {
    name: "Blockchain Technology",
    course_code: "IT701",
    specialties: ["Information Technology", "Blockchain"],
    total_hours: 120,
    hours_weekly: 10,
  },
  {
    name: "Quantum Computing",
    course_code: "CS801",
    specialties: ["Computer Science", "Advanced Computing"],
    total_hours: 140,
    hours_weekly: 12,
  },
  {
    name: "Ethical Hacking",
    course_code: "CS901",
    specialties: ["Cyber Security", "Computer Science"],
    total_hours: 100,
    hours_weekly: 9,
  },
];

const timeSlots = [
  { start: "7:30AM", end: "9:30AM" },
  { start: "9:30AM", end: "11:30AM" },
  { start: "12:00PM", end: "2:00PM" },
  { start: "2:00PM", end: "4:00PM" },
  { start: "7:30AM", end: "11:30AM" },
  { start: "12:00PM", end: "4:00PM" },
];

const daysOfWeek = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const startDate = new Date("2024-06-17"); // Starting date for the timetable
const periodDays = 45; // Period of the timetable

function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}

function addDays(date, days) {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function initializePopulation(size) {
  let population = [];
  for (let i = 0; i < size; i++) {
    population.push(generateRandomTimetable());
  }
  return population;
}

function generateRandomTimetable() {
  let timetable = [];
  for (let day of daysOfWeek) {
    let daySchedule = [];
    let availableSlots = [...timeSlots];
    let numCourses = Math.floor(Math.random() * 3) + 2; // 2 to 4 courses per day

    for (let i = 0; i < numCourses; i++) {
      if (availableSlots.length === 0) break;
      let course = courses[Math.floor(Math.random() * courses.length)];
      let slotIndex = Math.floor(Math.random() * availableSlots.length);
      let timeSlot = availableSlots.splice(slotIndex, 1)[0];

      daySchedule.push({ course, timeSlot });
    }
    timetable.push({ day, schedule: daySchedule });
  }
  return timetable;
}

function evaluateTimetable(timetable) {
  let score = 0;

  for (let day of timetable) {
    let usedSlots = new Set();

    for (let entry of day.schedule) {
      let { start, end } = entry.timeSlot;
      if (usedSlots.has(start + "-" + end)) {
        score -= 10; // Overlap penalty
      } else {
        usedSlots.add(start + "-" + end);
        score += 1; // Valid entry reward
      }
    }

    if (day.schedule.length < 2 || day.schedule.length > 4) {
      score -= 5; // Invalid number of courses penalty
    }
  }
  return score;
}

function selectParents(population) {
  population.sort((a, b) => evaluateTimetable(b) - evaluateTimetable(a));
  return population.slice(0, population.length / 2);
}

function crossover(parent1, parent2) {
  let crossoverPoint = Math.floor(Math.random() * daysOfWeek.length);
  let child1 = parent1
    .slice(0, crossoverPoint)
    .concat(parent2.slice(crossoverPoint));
  let child2 = parent2
    .slice(0, crossoverPoint)
    .concat(parent1.slice(crossoverPoint));
  return [child1, child2];
}

function mutate(timetable) {
  let dayIndex = Math.floor(Math.random() * daysOfWeek.length);
  let daySchedule = timetable[dayIndex];
  let mutationType = Math.random();

  if (mutationType < 0.5) {
    // Change a course time slot
    let courseIndex = Math.floor(Math.random() * daySchedule.schedule.length);
    let availableSlots = timeSlots.filter(
      (slot) => !daySchedule.schedule.some((entry) => entry.timeSlot === slot)
    );
    if (availableSlots.length > 0) {
      daySchedule.schedule[courseIndex].timeSlot =
        availableSlots[Math.floor(Math.random() * availableSlots.length)];
    }
  } else {
    // Change a course
    let courseIndex = Math.floor(Math.random() * daySchedule.schedule.length);
    daySchedule.schedule[courseIndex].course =
      courses[Math.floor(Math.random() * courses.length)];
  }

  return timetable;
}

function runGeneticAlgorithm(generations, populationSize) {
  let population = initializePopulation(populationSize);

  for (let generation = 0; generation < generations; generation++) {
    let parents = selectParents(population);
    let nextPopulation = [];

    while (nextPopulation.length < populationSize) {
      let [parent1, parent2] = [
        parents[Math.floor(Math.random() * parents.length)],
        parents[Math.floor(Math.random() * parents.length)],
      ];
      let [child1, child2] = crossover(parent1, parent2);

      if (Math.random() < 0.1) child1 = mutate(child1);
      if (Math.random() < 0.1) child2 = mutate(child2);

      nextPopulation.push(child1, child2);
    }

    population = nextPopulation;
  }

  return population[0];
}

let bestTimetable = runGeneticAlgorithm(100, 50);
console.log(bestTimetable);
console.log(bestTimetable[0].schedule);

function displayTimetable(timetable) {
  let date = new Date(startDate);

  for (let i = 0; i < periodDays; i++) {
    let dayOfWeek = daysOfWeek[date.getDay() - 1];
    let daySchedule = timetable.find((day) => day.day === dayOfWeek);

    if (daySchedule) {
      console.log(`${formatDate(date)} (${dayOfWeek}):`);
      for (let entry of daySchedule.schedule) {
        console.log(
          `  ${entry.course.name}: ${entry.timeSlot.start} - ${entry.timeSlot.end}`
        );
      }
    }

    date = addDays(date, 1);
  }
}

// displayTimetable(bestTimetable);
