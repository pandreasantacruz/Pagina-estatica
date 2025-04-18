class Activity{
  constructor (id, title, description, imgUrl){
      if (typeof id ===! "number") {
        throw Error ("Id debe ser un numero")
      }
      this.id = id
      this.title = title
      this.description = description
      this.imgUrl = imgUrl
  }
}
class Repository {
  constructor (){
  this.activities = [];
  this.id = 0
}
getAllActivities(){
  return this.activities;

}
createActivity(title, description, imgUrl){
  this.id++;
  let newActivity = new Activity(this.id, title, description, imgUrl);
  this.activities.push(newActivity);
}
}
describe("Se va a probar la clase Activity", function () {
   
    it ("Debe ser una clase", () => {
    expect(typeof Activity.prototype.constructor).toBe("function");
    });
    
    it ("Debe inicializar la Activity con los datos recibidos por parametros", () => {
      const mockActivity = {
        id: "1",
        title: "TituloPrueba",
        description: "Descripcion Prueba",
        imgUrl:"ImagenPrueba"
      };
      const newActivity = new Activity(
        mockActivity.id,
        mockActivity.title,
        mockActivity.description,
        mockActivity.imgUrl
      );

      expect (newActivity.id).toBe(mockActivity.id),
      expect(newActivity.title).toBe(mockActivity.title);
      expect(newActivity.description).toBe(mockActivity.description);
      expect(newActivity.imgUrl).toBe(mockActivity.imgUrl);

    });  

    it ("Debe ser numero", () => {
        

    })
})
describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
it("Debe ser una clase", () => {
    expect(typeof Repository.prototype.constructor).toBe("function");
});
it("Debe tener el metodo createActivity implementado", () => {
    const activityRepository  =  new Repository ();
    expect (activityRepository.createActivity).toBeDefined(); 
});
it("Debe get activities () retornar un array", () => {
    const activityRepository  =  new Repository ();
    expect(Array.isArray(activityRepository.getAllActivities ()).toBeTrue)
});

});
