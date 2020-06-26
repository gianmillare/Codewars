cities = {
  'san jose': {
    'country': 'united states',
    'population': 200000000,
    'fact': 'has the best food'
  },
  'los angeles': {
    'country': 'united states',
    'population': 15000000000,
    'fact': 'has the most actors'
  },
  'manila': {
    'country': 'philippines',
    'population': 2000,
    'fact': 'is a third world country'
  },
}

for x, y in cities.items():
  country = y['country']
  population = y['population']
  fact = y['fact']
  print(f"{x.title()} is a city in the {country.title()}. The city has a population of about {population} and {fact}!\n")