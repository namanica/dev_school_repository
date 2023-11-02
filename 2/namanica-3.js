function groupAnagrams(words)
{
    let grouped = {};
    for (let i = 0; i < words.length; i++)
    {
        let wordSorted = words[i].split("").sort().join("");
        if (grouped[wordSorted]) {
            grouped[wordSorted].push(words[i]);
        } else {
            grouped[wordSorted]=[words[i]];
        }
    } return Object.values(grouped);

} console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]));
