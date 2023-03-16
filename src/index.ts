import { renderTreeTable } from './renderer';
import { defaultTreeTable } from './tree';

declare global {
    interface Window {
        TreeTable: {

            /**
             * Adds a new Column **to the right** of the specified grid column
             * @param rowIndex a row index of the target cell
             * @param colIndex a column index of the target cell
             */
            AddColumn: (colIndex: number) => void;

            /**
             * Adds a new table row **below** the specified grid row
             * @param rowIndex a row index
             */
            AddRow: (rowIndex: number) => void;
        }
    }
}

const treeTable = defaultTreeTable;

const addColumn = (colIndex: number) => {

    /**
     * Magic is supposed to happen here...
     */

    renderTreeTable('tree-table', treeTable);
};

const addRow = (rowIndex: number) => {

    /**
     * Magic is supposed to happen here...
     */

    renderTreeTable('tree-table', treeTable);
};

const init = () => {
    window.TreeTable = {
        AddColumn: addColumn,
        AddRow: addRow,
    };

    renderTreeTable('tree-table', treeTable);
};

init();