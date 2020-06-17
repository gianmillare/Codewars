drinks = {
  "Jabroni": "Patron Tequila",
  "School Counselor":	"Anything with Alcohol",
  "Programmer":	"Hipster Craft Beer",
  "Bike Gang Member":	"Moonshine", 
  "Politician":	"Your tax dollars", 
  "Rapper":	"Cristal" 
}

def get_drink_by_profession(param):
  drink = param.title()

  if drink in drinks:
    print(drinks[drink])
  else:
    print("Beer")


x = "scHOOl counselor"
get_drink_by_profession(x)
  