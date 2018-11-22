/**
 * @module components/notes/form/views/Notebook
 */
import {View} from 'backbone.marionette';
import _ from 'underscore';

/**
 * Notebook item view.
 *
 * @class
 * @extends Marionette.View
 * @license MPL-2.0
 */
export default class Notebook extends View {

    get template() {
        return _.template('{=_.cleanXSS(name)}');
    }

    get tagName() {
        return 'option';
    }

    onRender() {
        this.$el.attr('value', this.model.get('id'));
    }

}
