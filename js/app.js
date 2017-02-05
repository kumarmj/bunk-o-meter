import React from "react";
import ReactDOM from "react-dom";
import {data} from './data';

const BunkList = (props) => (
  <ul>
  {props.bunks.map(bunk => {
    return (
      <div className="bunk-card mdl-card mdl-shadow--2dp">
              <div className="bunk-card-title mdl-card__title">
                <h1>{bunk.name}</h1>
              </div>
              <button className="incrButton mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="button">{bunk.bunks}</button>
          </div>)
  })}
  </ul>
);

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

                    <dialog className="mdl-dialog">
                      <h4 className="mdl-dialog__title">Fill up details</h4>
                      <div className="mdl-dialog__content">
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                          <input className="mdl-textfield__input" type="text" id="sample3" />
                          <label className="mdl-textfield__label" htmlFor="sample3">Name...</label>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                          <input className="mdl-textfield__input" type="number" id="sample3" />
                          <label className="mdl-textfield__label" htmlFor="sample3">Bunks...</label>
                        </div>
                      </div>
                      <div className="mdl-dialog__actions">
                        <button type="button" className="mdl-button">Submit</button>
                        <button type="button" className="mdl-button close">Cancel</button>
                      </div>
                    </dialog>

                    <BunkList bunks={data}/>
                  </div>
                </section>
                <section className="mdl-layout__tab-panel" id="scroll-tab-2">
                  <div className="page-content">This is tab2</div>
                </section>
                <section className="mdl-layout__tab-panel" id="scroll-tab-3">
                  <div className="page-content">This is tab3</div>
                </section>

              </main>
            </div>
      );
  }

}