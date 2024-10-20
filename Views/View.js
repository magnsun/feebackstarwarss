exports.renderStarwars=(starwars)=>{
    let html = '<h1>Starwars chater</h1><u1>'
    starwars.forEach(starwar => {
        html += `<li> ${starwars.name} (beskrivelse: ${starwars.Beskrivelse}, kendtfor: ${starwar.Kendtfor}) </li>`;
    });
    html += `</u1>`;
    return html;
};

exports.renderStarwarsForm =()=>{
    return `
    <h1>Starwars Form</h1>
       <form method="POST" action="/starwars">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br>
        <label for="Beskrivelse">Beskrivelse:</label>
        <input type="text" id="Beskrivelse" name="Beskrivelse" required><br>
        <label for="Kendtfor"> Kendtfor:</label>
        <input type="text" id="Kendtfor" name="Kendtfor" required><br>
        <button type="submit" class="btn btn-primary">Submit</button>
     </form>
    `;
};