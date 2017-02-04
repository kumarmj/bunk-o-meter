import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
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