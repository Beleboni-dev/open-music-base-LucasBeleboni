export function removeAccents(str) {
    const accentsMap = {
      'á': 'a',
      'é': 'e',
      'í': 'i',
      'ó': 'o',
      'ú': 'u',
      'à': 'a',
      'è': 'e',
      'ì': 'i',
      'ò': 'o',
      'ù': 'u',
      'â': 'a',
      'ê': 'e',
      'î': 'i',
      'ô': 'o',
      'û': 'u',
      'ã': 'a',
      'õ': 'o',
      'ç': 'c'
    }
    
    return str.split('').map(char => {
      return accentsMap[char] || char
    }).join('')
  }
  