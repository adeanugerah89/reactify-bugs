import React, {Component} from 'react';
import Chance from 'chance';

class Form extends Component {


  submitForm = () => {
    const bug =  {
      id: new Chance().guid(),
      description: document.getElementById('description').value,
      severity: document.getElementById('severity').value,
      assignedTo: document.getElementById('assignedTo').value,
      Status: 'Open'
    }
    let dataBugs = []
    if (localStorage.getItem('dataBugs') !== null) {
      dataBugs = JSON.parse(localStorage.getItem('dataBugs'))
    }
    dataBugs.push(bug)
    localStorage.setItem('dataBugs',JSON.stringify(dataBugs))
    console.log(dataBugs);
  }
  
  render () {
    return (
      <div className="container">
      <section className="hero is-medium">
        <div className="hero-body">
          <h2 className="title">Add New Bug Report:</h2>
          <form action="" id="bugInputForm">
            <label className="label">Description</label>
            <p className="control">
              <input className="input" type="text" id="description" placeholder="Describe a bug..."></input>
            </p>
            <label className="label">Severity</label>
            <p className="control">
              <span className="select">
                <select id="severity" name="severity">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </span>
            </p>
            <label className="label">Assigned To</label>
            <p className="control">
              <input className="input" type="text" id="assignedTo" placeholder="Enter responsible..."></input>
            </p>
            <div className="control is-grouped">
              <p className="control">
                <button className="button is-warning" onClick={this.submitForm}>Submit</button>
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