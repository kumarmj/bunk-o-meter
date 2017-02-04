import React from "react";
import ReactDOM from "react-dom";

class Dialog extends React.Component {
  render() {
    return <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored show-modal">
    <i class="material-icons">add</i>
  </button>
  <dialog class="mdl-dialog">
    <div class="mdl-dialog__content">
      <form action="#">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" id="sample3">
          <label class="mdl-textfield__label" for="sample3">Subject...</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample4">
          <label class="mdl-textfield__label" for="sample4">Bunks...</label>
          <span class="mdl-textfield__error">Input is not a number!</span>
        </div>
      </form>
    </div>
    <div class="mdl-dialog__actions mdl-dialog__actions--full-width">

    </div>

    <button type="button" class="mdl-button">Proceed</button>
    <button type="button" class="mdl-button close">Cancel</button>
  </dialog>
  <script>
    var dialog = document.querySelector('dialog');
    var showModalButton = document.querySelector('.show-modal');
    if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    showModalButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });
  </script>
  }
}

module.exports = Dialog
