class Topic {
    constructor(title, link, order)
    {
        this.title = title;
        this.link = link;
    }
}

export var topics = [
    new Topic("Procedimientos", "./procedures.html"),
    new Topic("Funciones", "./functions.html"),
    new Topic("Mapas", "./maps.html")
];
