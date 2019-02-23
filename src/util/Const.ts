enum WeekdayID {
  ZERO = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6
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
      case WeekdayID.ZERO: return Weekday.MONDAY;
      case WeekdayID.ONE: return Weekday.TUESDAY;
      case WeekdayID.TWO: return Weekday.WEDNESDAY;
      case WeekdayID.THREE: return Weekday.THURSDAY;
      case WeekdayID.FOUR: return Weekday.FRIDAY;
      case WeekdayID.FIVE: return Weekday.SATURDAY;
      case WeekdayID.SIX: return Weekday.SUNDAY;
  }
}