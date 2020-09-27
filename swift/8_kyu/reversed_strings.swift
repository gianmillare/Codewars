// Reversed Strings
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/swift

// Solution 1: Reverse functions
func reverse(_ str: String) -> String {
    return String(str.reversed())
}

// Solution 2: For Loop Concatenation
func reverse(_ str: String) -> String {
    var ans = ""

    for s in str {
        ans = String(s) + ans
    }

    return ans
}

print(reverse("hello"))
print(reverse("Welcome to Swift"))