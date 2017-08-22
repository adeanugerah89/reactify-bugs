import React, {Component} from 'react'

class List extends Component {
  constructor() {
    super()
    this.state = {
      listBugs: []
    }
  }
  
  getDataBugs() {
    if(localStorage.getItem('dataBugs') !== null) {
      JSON.parse(localStorage.getItem('dataBugs')).forEach(data => {
        this.state.listBugs.push(data)
      })
    } else {
      console.log('HACKTIV8');
    }
  }
  
  componentWillMount() {
    this.getDataBugs()
    console.log('tesss');
  }
  
  render () {
    var data = this.state.listBugs
    console.log('==============', data);
    return (
      <div className="container">
      {
        data.map(item => {
          return (
            <div className="columns">
              <div className="column is-medium" id="listBugs">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">
                    BugId: {item.id}
                    </p>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      {item.description}
                      <span className="tag is-info">{item.severity}</span>
                      <p>Assigned To: {item.assignedTo}</p>
                    </div>
                    <small className="tag is-primary">{item.Status}</small>
                  </div>
                  <footer className="card-footer">
                    <a onClick={(id) => {this.close(item.id)}} className="is-warning card-footer-item">Close</a>
                    <a className="card-footer-item" onClick={(index,id) => {this.deleteBug(item.id)}}>Delete</a>
                  </footer>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
    )
  }
  
  deleteBug (index,id) {
    let dataBugs = JSON.parse(localStorage.getItem('dataBugs'))
    dataBugs.splice(id,1)
    localStorage.setItem('dataBugs', JSON.stringify(dataBugs))
  }
  
  close (id) {
    let dataBugs = JSON.parse(localStorage.getItem('dataBugs'))
    let updatedBugs = dataBugs.map((item) => {
      if (item.id === id)
        item.Status = 'Close'
      return item
    })

    localStorage.setItem('dataBugs', JSON.stringify(updatedBugs))
  }
}

export default List