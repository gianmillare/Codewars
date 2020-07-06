// Welcome!
// https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript

language_dic = {
    'english': 'Welcome',
    'czech': 'Vitejte',
    'danish': 'Velkomst',
    'dutch': 'Welkom',
    'estonian': 'Tere tulemast',
    'finnish': 'Tervetuloa',
    'flemish': 'Welgekomen',
    'french': 'Bienvenue',
    'german': 'Willkommen',
    'irish': 'Failte',
    'italian': 'Benvenuto',
    'latvian': 'Gaidits',
    'lithuanian': 'Laukiamas',
    'polish': 'Witamy',
    'spanish': 'Bienvenido',
    'swedish': 'Valkommen',
    'welsh': 'Croeso'
}

function greet(language) {
    var default_greeting = language_dic.english;
    
    if (language in language_dic){
        return language_dic[language];
    } else {
        return default_greeting;
    }
}

console.log(greet('irish'));