class Formatter {
  //add static methods here


  // Write a method static capitalize that takes in a string and capitalizes the first letter.
  static capitalize(string){

    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  // Write a method static sanitize that takes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces.
  static sanitize( string ) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }


  
    static titleize( sentence ) {

      // Defines an array of words that should not be capitalized unless they are the first word of the sentence.
      let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]

      // Initializes an empty array to store the capitalized words.
      let result = [];

      // Splits the input sentence into an array of words based on spaces.
      let arrayOfWords = sentence.split( " " )

      // Iterates through each word in the arrayOfWords array.
      for ( let n = 0; n < arrayOfWords.length; n++ ) {

        // Checks if it's the first word of the sentence. If it is, it capitalizes the word
        // using the capitalize function (assumed to be defined elsewhere) and
        // pushes it to the result array
        if ( n == 0 ) {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        } else {

          if ( exceptions.includes( arrayOfWords[ n ] ) ) {
            result.push( arrayOfWords[ n ] )
          } else {
            result.push( this.capitalize( arrayOfWords[ n ] ) )
          }
        }
      }
    
      return result.join( " " );
  }

}