import React, {Component} from 'react';

class Table extends Component {
    render() {
        return (
            <div className=" overflow-x-auto">
                <table className="w-full text-center table-collapse border">
                    <thead>
                    <tr>
                        <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100"> #</th>
                        <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100"> name</th>
                        <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100"> dbType</th>
                        <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100"> htmlType</th>
                        <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100"> validations</th>
                        <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100"
                            title="(searchable, fillable, primary, inForm, inIndex)"> Options
                        </th>
                        <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100">More</th>
                    </tr>
                    </thead>
                    <tbody className="align-baseline">
                    {this.props.children}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;