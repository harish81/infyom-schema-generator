import React, {Component} from 'react';
import * as Icons from 'react-feather';
import {dbTypes, htmlTypes, validationTypes} from "./App";
import AutocompleteTextField from "./auto-complete/AutoCompleteTextField";

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td className="p-1 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-no-wrap">{this.props.index + 1}</td>
                <td className="p-1 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-no-wrap">
                    <input type="text" name="name" placeholder="Enter name" value={this.props.row.name} onChange={(event => {this.props.onChange(event.target)})}
                           className="border rounded py-1 px-2 text-grey-darkest md:ml-2 focus:outline-none focus:bg-white focus:border-gray-500"/>
                </td>
                <td className="p-1 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-no-wrap">
                    <AutocompleteTextField Component="input" options={dbTypes} trigger="" spacer="" type="text" name="dbType" placeholder="Enter dbType" value={this.props.row.dbType} onChange={(event => {this.props.onChange(event.target)})}
                           className="border rounded py-1 px-2 text-grey-darkest md:ml-2 focus:outline-none focus:bg-white focus:border-gray-500"/>
                </td>
                <td className="p-1 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-no-wrap">
                    <AutocompleteTextField Component="input" options={htmlTypes} trigger="" spacer="" type="text" name="htmlType" placeholder="Enter htmlType" value={this.props.row.htmlType} onChange={(event => {this.props.onChange(event.target)})}
                           className="border rounded py-1 px-2 text-grey-darkest md:ml-2 focus:outline-none focus:bg-white focus:border-gray-500"/>
                </td>
                <td className="p-1 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-no-wrap">
                    <AutocompleteTextField Component="input" options={validationTypes} trigger="" spacer="" type="text" name="validations" placeholder="Enter validations" value={this.props.row.validations} onChange={(event => {this.props.onChange(event.target)})}
                           className="border rounded py-1 px-2 text-grey-darkest md:ml-2 focus:outline-none focus:bg-white focus:border-gray-500"/>
                </td>
                <td className="p-1 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-no-wrap text-left">
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" name="searchable" className="form-check-input" checked={this.props.row.searchable} onChange={(event => {this.props.onChange(event.target)})}/>
                            <span>searchable</span>
                        </label>
                    </div>

                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" name="fillable" className="form-check-input" checked={this.props.row.fillable} onChange={(event => {this.props.onChange(event.target)})}/>
                            <span>fillable</span>
                        </label>
                    </div>

                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" name="primary" className="form-check-input" checked={this.props.row.primary} onChange={(event => {this.props.onChange(event.target)})}/>
                            <span>primary</span>
                        </label>
                    </div>

                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" name="inForm" className="form-check-input" checked={this.props.row.inForm} onChange={(event => {this.props.onChange(event.target)})}/>
                            <span>inForm</span>
                        </label>
                    </div>

                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" name="inIndex" className="form-check-input" checked={this.props.row.inIndex} onChange={(event => {this.props.onChange(event.target)})}/>
                            <span>inIndex</span>
                        </label>
                    </div>

                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" name="inView" className="form-check-input" checked={this.props.row.inView} onChange={(event => {this.props.onChange(event.target)})}/>
                            <span>inView</span>
                        </label>
                    </div>
                </td>
                <td className="border-t border-gray-300 font-mono text-xs text-gray-600 whitespace-no-wrap">
                    <div className="inline-flex flex-col h-full min-h-full" style={{height: '20vh'}}>
                        <button className="flex-1 hover:bg-gray-300 rounded focus:bg-gray-300" title={"Move Field Up"} onClick={this.props.shiftRowUp}><Icons.ChevronUp size={20}/></button>
                        <button className="flex-1 hover:bg-gray-300 rounded focus:bg-gray-300" title={"Move Field Down"} onClick={this.props.shiftRowDown}><Icons.ChevronDown size={20}/></button>
                        <button style={{position:'relative'}} title={"Remove This Field"} onClick={this.props.removeRowAt} className="flex-1 mt-auto hover:bg-gray-300 rounded focus:bg-gray-300"><Icons.Trash2 size={20}/></button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableRow;