
class Activity{
    constructor (id, title, description, imgUrl){
        this.id = id
        this.title = title
        this.description =description
        this.imgUrl = imgUrl
    }
}
class Repository {
    constructor (activities){
    this.activities = [];
}
getAllActivities(){
    return this.activities;

}
createActivity(id, title, description, imgUrl){
    let newActivity = new Activity(id, title, description, imgUrl);
    this.activities.push(newActivity);
}
deleteActivity(id){
    this.activities = this.activities.filter(activity => activity.id !== id);
}
}