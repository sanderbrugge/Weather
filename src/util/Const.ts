enum WeekdayID {
  ZERO = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
}

enum Weekday {
  MONDAY = "Maandag",
  TUESDAY = "Dinsdag",
  WEDNESDAY = "Woensdag",
  THURSDAY = "Donderdag",
  FRIDAY = "Vrijdag",
  SATURDAY = "Zaterdag",
  SUNDAY = "Zondag"
}

export function getDayName(id: WeekdayID): Weekday {
  switch(id) {
      case WeekdayID.ONE: return Weekday.MONDAY;
      case WeekdayID.TWO: return Weekday.TUESDAY;
      case WeekdayID.THREE: return Weekday.WEDNESDAY;
      case WeekdayID.FOUR: return Weekday.THURSDAY;
      case WeekdayID.FIVE: return Weekday.FRIDAY;
      case WeekdayID.SIX: return Weekday.SATURDAY;
      case WeekdayID.ZERO: return Weekday.SUNDAY;
  }
}