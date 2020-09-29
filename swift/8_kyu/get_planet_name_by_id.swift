// Get Planet Name By ID
// https://www.codewars.com/kata/515e188a311df01cba000003/train/swift

// Solution 1
func getPlanetName(_ id: Int) -> String {
  var name: String
  switch id {
    case 1: 
      name = "Mercury"
    case 2: 
      name = "Venus"
    case 3: 
      name = "Earth"
    case 4: 
      name = "Mars"
    case 5: 
      name = "Jupiter"
    case 6: 
      name = "Saturn"
    case 7: 
      name = "Uranus"
    case 8: 
      name = "Neptune"
    default:
      name = ""
  } 
  return name
}

// Solution 2
func getPlanetName(_ id: Int) -> String {
  switch id {
    case 1: return "Mercury"
    case 2: return "Venus"
    case 3: return "Earth"
    case 4: return "Mars"
    case 5: return "Jupiter"
    case 6: return "Saturn"
    case 7: return "Uranus"
    case 8: return "Neptune"
    default: return ""
  } 
}