# def get_planet_name(id):
#     # This doesn't work; Fix it!
#     name=""
#     switch id:
#         case 1: name = "Mercury"
#         case 2: name = "Venus"
#         case 3: name = "Earth"
#         case 4: name = "Mars"
#         case 5: name = "Jupiter"
#         case 6: name = "Saturn"
#         case 7: name = "Uranus"
#         case 8: name = "Neptune"
#     return name

# SOLUTION
def get_planet_name(id):
    id = str(id)
    planet_dict = {
        '1': 'Mercury',
        '2': 'Venus',
        '3': 'Earth',
        '4': 'Mars',
        '5': 'Jupiter',
        '6': 'Saturn',
        '7': 'Uranus',
        '8': 'Neptune'
    }

    print(planet_dict[id])

x = input()
get_planet_name(x)