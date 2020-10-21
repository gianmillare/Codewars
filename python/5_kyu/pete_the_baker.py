# Pete, The Baker
# https://www.codewars.com/kata/525c65e51bf619685c000059/train/python

# Solution 1: Getting minimum from new dictionary
def cakes(recipe, available):
    # Create an empty dictionary to hole answers
    finished_recipe = {}

    # Loop through all keys of recipe to find matching keys in available
    for key in recipe:
        if key in available:
            finished_recipe[key] = 0

            # If available is greater than recipe, increment dictionary entry
            while recipe[key] <= available[key]:
                available[key] = available[key] - recipe[key]
                finished_recipe[key] += 1
        else:
            return 0
    
    # return the minimum amount of ingredients from the dictionary
    return min(finished_recipe.values())



# print(cakes({"flour": 500, "sugar": 200, "eggs": 1}, {"flour": 1200, "sugar": 1200, "eggs": 5, "milk": 200}))
# print(cakes({"apples": 3, "flour": 300, "sugar": 150, "milk": 100, "oil": 100}, {"sugar": 500, "flour": 2000, "milk": 2000}))
print(cakes({'cream': 1, 'flour': 3, 'sugar': 1, 'milk': 1, 'oil': 1, 'eggs': 1}, {'sugar': 1, 'eggs': 1, 'flour': 3, 'cream': 1, 'oil': 1, 'milk': 1}))