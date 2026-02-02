## Steps we followed in script
1. we store the data url into a variable 'endpoint'
2.now to store actual data of link we have a var 'cities'.
3. fetching the data
- fetching does not give data immediately , hence it gives a promise
4. for handling the promise .then() chain
5.1st .then reciving the data and converting it to JS object
6. 2nd is logging data which is an array and full of city objects
- Actually we can do 2 things 
.then(data => cities = data)
OR
.then(data => cities.push(data)) // but here the data of 1000 cities of arrays will be nested inside another array
so we used spread operator

## function findMatches
1. wordToMatch // what user types in the searchbox
2. cities // big array of all cities object

3. Creating a smart search rule(RegExp) -> regular expression typically used for search patternmatching within text

'gi' -> g - find the char globally
        i - find char with case-insensitive matching //koi fark nhi pdta ke bda ho chota ho

### what's rule 
get your data first, then hook over on display with html


-- After displaying searched word in suggestion, need to higlight that specific word in suggestn and format the populatn with proper commas



