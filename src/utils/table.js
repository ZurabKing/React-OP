import { differenceInYears, differenceInCalendarMonths, parse } from "date-fns";

function plural(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}

function calculateWorkExperienceInYears(from, to) {
  const fromDate = parse(from, "yyyy-MM-dd", new Date());
  const toDate = parse(to, "yyyy-MM-dd", new Date());
  const mounths = differenceInCalendarMonths(toDate, fromDate);
  const years = Number((mounths / 12).toFixed(1));

  return years;
}

function calculateWorksExperienceInYears(works) {
  return works.reduce(
    (experience, { from, to }) =>
      experience + calculateWorkExperienceInYears(from, to),
    0
  );
}

export function calculateAge(born) {
    const date = parse(born, "yyyy-MM-dd", new Date());
    const age = differenceInYears(new Date(), date);
  
    return age;
  }

export function getWorksExperience(works) {
  const experienceInYears = Math.floor(calculateWorksExperienceInYears(works));

  if (experienceInYears < 1) {
    return "Менее года";
  }

  const declension = ["год", "года", "лет"];

  return `+${experienceInYears} ${plural(experienceInYears, declension)}`;
}

