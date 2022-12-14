// This function receives a string and:
//   - Splits the string using ','
//   - Filters out the elements containing dog, bark or bone
//   - Filters out the elements of length divisible by 5
//   - Filters out the elements wich first and last element sum of Unicodes values is even
//   - Filters out the elements that have the character 'e' in the character next to the middle of the string
//   - Filters out the elements with an odd number of lower case letters
//   - Filters out the elements with less than 2 upper case letters
//   - Filters out the elements that have the character 'S'

function filterTitles(str){
    return str.split(',')
                .filter(name => name.at(0) !== ' ' && name.at(-1) !== ' ')
                // /dog|bark|bone/i     Matches the strings 'dog', 'bark' or 'bone'. The 'i' means insensitive so it ignores the case
                .filter(name => !/dog|bark|bone/i.test(name))
                .filter(name => name.length % 5)
                .filter(name => (name.charCodeAt(0) + name.charCodeAt(name.length - 1)) % 2)
                .filter(name => name.at(Math.round(name.length / 2)) !== 'e')
                // /[^a-z]/g            Matches every character different to a lower case letter in the string
                .filter(name => name.replace(/[^a-z]/g, '').length % 2 == 0)
                // /[^A-Z]/g            Matches every character different to an upper case letter in the string
                .filter(name => name.replace(/[^A-Z]/g, '').length > 1)
                .filter(name => !name.includes('S'));
}


// console.log(filterTitles("The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"))

// console.log("The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood".split(',').map(name => ['|'+name+'|', name.at(0) !== ' ' && name.at(-1) !== ' ', /dog|bark|bone/i.test(name), name.length, (name.charCodeAt(0) + name.charCodeAt(name.length - 1)), name.at(Math.round(name.length / 2)), name.replace(/[^a-z]/g, ''), name.replace(/[^a-z]/g, '').length, name.replace(/[^A-Z]/g, '')]))

module.exports = { filterTitles };