let Starwars =[
    {id: 1, name:'Luke Skywalker',Beskrivelse:'En Tatooine-bonde, der bliver en legendarisk Jedi-ridder',Kendtfor:'At være hovedpersonen i den originale Star Wars-trilogi og en central figur i kampen mod det Galaktiske Imperium'},
    {id: 2, name:'Darth Vader',Beskrivelse:'Født som Anakin Skywalker, han blev en Sith Lord efter at have faldet til den mørke side',Kendtfor:'At være en af de mest ikoniske skurke i filmhistorien, kendt for sin mørke rustning og tunge vejrtrækning'},
    {id: 3, name:'Princess Leia',Beskrivelse:'En leder af Rebel Alliance og søster til Luke Skywalker',Kendtfor:'Sin styrke, intelligens og evne til at lede og inspirere rebellerne mod Imperiet'},
    {id: 4, name:'Yoda',Beskrivelse:'En smuggler, der bliver en helt i Rebel Alliance',Kendtfor:'Sin lille størrelse, grønne hud og utrolige styrke i Kraften samt sine unikke talekonstruktioner'},
    {id: 5, name:'Han Solo',Beskrivelse:'En smuggler, der bliver en helt i Rebel Alliance',Kendtfor:'Sin hurtige rumskib, Millennium Falcon, og sin trofaste co-pilot, Chewbacca'},
];

//get all star war chater
exports.getStarwarsData = ()=>{
    return Starwars;
}