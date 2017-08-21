import React, {Component} from 'react';

class Form extends Component {
  render () {
    return (
      <div>
      <section class="hero is-medium">
        <div class="hero-body">
          <h2 class="title">Add New Bug Report:</h2>
          <form action="" id="bugInputForm">
            <label class="label" for="">Description</label>
            <p class="control">
              <input class="input" type="text" id="description" placeholder="Describe a bug..."></input>
            </p>
            <label class="label" for="">Severity</label>
            <p class="control">
              <span class="select">
                <select id="severity" name="severity">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </span>
            </p>
            <label class="label" for="">Assigned To</label>
            <p class="control">
              <input class="input" type="text" id="assignedTo" placeholder="Enter responsible..."></input>
            </p>
            <div class="control is-grouped">
              <p class="control">
                <button class="button is-warning">Submit</button>
              </p>
            </div>
          </form>
        </div>
      </section>
      </div>
    )
  }
}

export default Form;