import React, {Component} from 'react';
import Table from "./Table";
import TableRow from "./TableRow";
import SyntaxHighlighter from "react-syntax-highlighter";
import codeStyle from "react-syntax-highlighter/dist/cjs/styles/hljs/monokai-sublime";
import {jsonFormatter, saveFile} from "../util/util";

const singleRow = {
    "name": "title",
    "dbType": "string",
    "htmlType": "text",
    "validations": "required",
    "searchable": true,
    "fillable": true,
    "primary": false,
    "inForm": true,
    "inIndex": true,
    "inView": true
};

export const dbTypes = ["string", "text", "integer", "enum"];
export const htmlTypes = ["text", "textarea", "email", "date", "number", "password", "select", "checkbox", "radio", "file", "toggle-switch"];
export const validationTypes = ["required", "string", "numeric"];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schemas: [],
            modelName: 'Schema'
        };
        this.state.schemas.push({...singleRow});
    }

    addRow = () => {
        let cState = this.state.schemas;
        cState.push({...singleRow});
        this.setState({schemas: cState});
    }

    removeRow = () => {
        let cState = this.state.schemas;
        cState.pop();
        this.setState({schemas: cState});
    }

    updateModelName = (event) => {
        this.setState({modelName: event.target.value});
    }

    updateRow = (input, index) => {
        console.log(input.type, input.value);
        let newState = [...this.state.schemas];
        if (input.type === 'checkbox') {
            newState[index][input.name] = !newState[index][input.name];
        } else {
            newState[index][input.name] = input.value;
        }
        this.setState({schemas: newState});
    }

    downloadFile = () => {
        saveFile(jsonFormatter(JSON.stringify(this.state.schemas)), this.state.modelName + ".json");
    }

    render() {
        return (
            <div className="container m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4">
                <h3 className="text-3xl text-blue-600">Infyom Json Schema Generator</h3>
                <div className="mt-4 mb-4">
                    <input type="text" name="model" id="model" placeholder="Enter model/schema name.."
                           value={this.state.modelName} onChange={this.updateModelName} title={"Enter schema name here"}
                           className="border rounded py-2 px-3 text-grey-darkest focus:outline-none focus:bg-white focus:border-gray-500"/><span className="text-gray-600">.json</span>
                </div>
                <Table>
                    {
                        this.state.schemas.map((row, index) => {
                            return (
                                <TableRow key={index}
                                          row={row}
                                          index={index}
                                          onChange={(input) => {
                                              this.updateRow(input, index)
                                          }}/>
                            );
                        })
                    }
                </Table>
                <div className="flex items-center justify-between mt-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button" onClick={this.addRow}>
                        Add Row
                    </button>
                    <button onClick={this.downloadFile}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg className="fill-current w-f h-4 mr-2" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20">
                            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
                        </svg>
                        <span>Download</span>
                    </button>
                    <button onClick={this.removeRow}
                            className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                        Remove Row
                    </button>
                </div>
                <div className="overflow-auto mt-3">
                    <SyntaxHighlighter language="json" style={codeStyle}>
                        {jsonFormatter(JSON.stringify(this.state.schemas))}
                    </SyntaxHighlighter>
                </div>
            </div>
        );
    }
}

export default App;
