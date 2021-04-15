const months = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const daysOfWeek = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

export function execute(dateString) {
  const date = new Date(dateString);

  const dayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];

  return `${dayOfWeek} ${dayOfMonth} ${month}`;
}

export function getDayOfWeek(dateString) {
  const date = new Date(dateString);

  return daysOfWeek[date.getDay()];
}

export function getMonthAndDay(dateString) {
  const date = new Date(dateString);

  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];

  return `${dayOfMonth} ${month}`;
}
