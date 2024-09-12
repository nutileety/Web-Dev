function anagram(str1, str2) {
    let sorted_str1 = str1.toLowerCase().split("").sort().join();

    let sorted_str2 = str2.toLowerCase().split("").sort().join(); 

    if(sorted_str1 == sorted_str2)
        console.log("COOL, it's an Anagram..!");
    else
        console.log("OOPS, it's not a Anagram..!");
}

anagram("Rage","Gear"); //COOL, it's an Anagram..!

anagram("Bear","Beer");  //OOPS, it's not a Anagram..!