import React from "react";
import ReactDOM from "react-dom";
import {data} from './data';

class BunkCard extends React.Component {
  render() {
    return (
        <div className="bunk-card mdl-card mdl-shadow--2dp">
          <div className="dropDownMenu">
            <button id={this.props.name}
            className="mdl-button mdl-js-button mdl-button--icon">
              <i className="material-icons">more_vert</i>
            </button>

            <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                htmlFor={this.props.name}>
              <li className="mdl-menu__item">Edit</li>
              <li className="mdl-menu__item" onClick={() => this.props.handleDelete(this.props.id)}>
                  Delete
              </li>
            </ul>
          </div>
            <div className="bunk-card-title mdl-card__title">
              <h1>{this.props.name}</h1>
            </div>
            <button 
              onClick={() => this.props.handleIncrease(this.props.id)}
              className="incrButton mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="button">{this.props.bunks}</button>
        </div>
      )
  }
}
class BunkList extends React.Component {
  constructor(props){
    super(props);
    this.state = { bunks: this.props.bunks }
  }
  increaseBunks(id) {
    const currentBooks = this.state.bunks;
    const bunks = currentBooks.map(bunk => {
      if(bunk.id == id){
        bunk.bunks += 1;
      }
      return bunk;
    });

    this.setState({ bunks });
  }
  deleteBunkCard(id) {
    const currentBooks = this.state.bunks;
    const bunks = currentBooks.filter(bunk => bunk.id !== id);

    console.log(id);
    this.setState({ bunks });
  }
  addBunkCard(name, bunks) {
    this.setState({
      bunks: this.state.bunks.concat({
        id: Date.now(),
        name,
        bunks
      })
    })
  }
  render() {
    return (
      <ul>
        {this.state.bunks.map((bunk, index) => {
          return (
              <BunkCard
                key={bunk.id}
                id={bunk.id}
                name={bunk.name} 
                bunks={bunk.bunks} 
                handleIncrease={this.increaseBunks.bind(this)}
                handleDelete={this.deleteBunkCard.bind(this)}
              />
            )
        })}
        <Dialog addAction={this.addBunkCard.bind(this)}/>
      </ul>       
        
    );
  }
}

class Dialog extends React.Component {
  render() {
    return (
          <dialog className="mdl-dialog">
            <h4 className="mdl-dialog__title">Fill up details</h4>
            <div className="mdl-dialog__content">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" type="text" id="nameInput" />
                <label className="mdl-textfield__label" htmlFor="sample3">Name...</label>
              </div>
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" type="number" id="bunksInput" />
                <label className="mdl-textfield__label" htmlFor="sample3">Bunks...</label>
              </div>
            </div>
            <div className="mdl-dialog__submit close">
              <button type="button" className="mdl-button" onClick={() => {
                this.props.addAction(
                  document.getElementById('nameInput').value,
                  Number(document.getElementById('bunksInput').value)
                )
              }
            }>Submit</button>
              <button type="button" className="mdl-button close">Cancel</button>
            </div>
          </dialog>
      )
  }
}


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      bunks: this.props.bunks
    };
  }
  render() {
    return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
              <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                  <span className="mdl-layout-title">Bunk-o-Meter</span>
                </div>
                <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
                  <a href="#scroll-tab-1" className="mdl-layout__tab is-active">Bunks</a>
                  <a href="#scroll-tab-2" className="mdl-layout__tab">Notices</a>
                  <a href="#scroll-tab-3" className="mdl-layout__tab">Results</a>
                </div>
              </header>
              <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">Menu</span>
              </div>
              <main className="mdl-layout__content">
                <section className="mdl-layout__tab-panel is-active" id="scroll-tab-1">
                  <div className="page-content">
                    <button id="show-dialog" className="new-bunk mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                      <i className="material-icons">add</i>
                    </button>

                    
                    <BunkList bunks={data}/>
                  </div>
                </section>
                <section className="mdl-layout__tab-panel" id="scroll-tab-2">
                  <div className="page-content">
                    
                  </div>
                </section>
                <section className="mdl-layout__tab-panel" id="scroll-tab-3">
                  <div className="page-content">
                    <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>
                  </div>
                </section>

              </main>
            </div>
      );
  }

}