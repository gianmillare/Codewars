// Complementary DNA
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function DNAStrand(dna){
    dna_seq = { 'A': 'T', 'T':'A','C':'G','G':'C' };
    ans = [];
    
    for (var i = 0; i < dna.length; i++) {
      ans.push(dna_seq[dna[i]]);
    }
    
    return ans.join('');
  }