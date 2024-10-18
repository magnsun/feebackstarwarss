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
        <label for="Beskrivelse">Beskrivelse:</label>
        <label for="Kendtfor"> Kendtfor:</label>
        <button type="submit" class="btn btn-primary">Submit</button>
     </form>
    `;
};