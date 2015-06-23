/*  
  The Backbone Model definition for a gameified task list item.
*/
var Task = Backbone.Model.extend({

  /* 
    If "task" or "value" or "complete" aren't passed in through the initialization,
    default
      - the "task" property to "Unknown"
      - the "value" property to 0
      - the "complete" property to false
  */
  defaults: {
    task: "Unknown",
    value: 0,
    complete: false
  },

  /* 
    Returns true if this task's "complete" attribute is set to true
    Otherwise, returns false.
  */
  completed: function() {
    if (this.get("complete") === true){
      return true
    }
    else{
      return false
    }

  },

  /* 
    Sets this task's "complete" attribute to the opposite of it's current value
    (e.g. true -> false, false -> true)

    Doesn't need to return anything.
  */
  check: function() {
    if(this.completed()){
      this.set("complete", false)
    }
    else{
      this.set("complete", true)
    }
    
  },

  /*
    Sets the task name and task point value to the parameters passed in.

    Doesn't need to return anything.
  */
  update: function(name, value) {
    this.set ({"task": name}) &&
    this.set ({"value": value})

  }

})