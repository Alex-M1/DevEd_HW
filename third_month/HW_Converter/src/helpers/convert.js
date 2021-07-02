const lengthSystem = {
  meters: {
    meters: 1,
    miles: 0.000621371,
    yards: 1.093613,
    feet: 3.28084,
    versts: 0.000937383,
  },
  miles: {
    meters: 1609.344,
    miles: 1,
    yards: 1760,
    feet: 0.003281,
    versts: 1.50857,
  },
  yards: {
    meters: 0.9144,
    miles: 0.000568182,
    yards: 1,
    feet: 3,
    versts: 0.000857143,
  },
  feet: {
    meters: 0.3048,
    miles: 0.000189394,
    yards: 0.333333,
    feet: 1,
    versts: 0.000285714,
  },
  versts: {
    meters: 1066.8,
    miles: 0.662879,
    yards: 1166.67,
    feet: 3500,
    versts: 1,
  },
};
export const convert = (num, primary, secondary, system = lengthSystem) => (
  (+num * system[primary][secondary]).toString()
);
