class Activity{
  constructor (id, title, description, imgUrl){
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

describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
  it("Debe ser una clase", () => {
    expect(typeof Activity.prototype.constructor).toBe("function");
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
it("El metodo createActivity debe agregar actividades", () =>{
    const activityRepository  =  new Repository ();
    activityRepository.createActivity ('id: Prueba Id')
    activityRepository.createActivity ('title: Prueba title')
    activityRepository.createActivity ('description: Prueba description')
    activityRepository.createActivity ('imgUrl: Prueba imgUrl');
    expect(activityRepository.createActivity()).toEqual('id: Prueba Id');
    expect(activityRepository.createActivity()).toEqual('title: Prueba title');
    expect(activityRepository.createActivity()).toEqual('description: Prueba description');
    expect(activityRepository.createActivity()).toEqual('imgUrl: Prueba imgUrl')
});
});
