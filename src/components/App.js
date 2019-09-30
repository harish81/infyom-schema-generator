import React, {Component} from 'react';
import Table from "./Table";
import TableRow from "./TableRow";
import SyntaxHighlighter from "react-syntax-highlighter";
import codeStyle from "react-syntax-highlighter/dist/cjs/styles/hljs/idea";
import {jsonFormatter, saveFile} from "../util/util";
import * as Icons from 'react-feather';

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
export const validationTypes = ["accepted","active_url","after:date","after_or_equal:date","alpha","alpha_dash","alpha_num","array","bail","before:date","before_or_equal:date","between:min,max","boolean","confirmed","date","date_equals:date","date_format:format","different:field","digits:value","digits_between:min,max","dimensions","distinct","email","ends_with:foo,bar,...","exists:table,column","file","filled","gt:field","gte:field","image","in:foo,bar,...","in_array:anotherfield.*","integer","ip","ipv4","ipv6","json","lt:field","lte:field","max:value","mimetypes:text/plain,...","mimes:foo,bar,...","Basic Usage Of MIME Rule","min:value","not_in:foo,bar,...","not_regex:pattern","nullable","numeric","present","regex:pattern","required","required_if:anotherfield,value,...","required_unless:anotherfield,value,...","required_with:foo,bar,...","required_with_all:foo,bar,...","required_without:foo,bar,...","required_without_all:foo,bar,...","same:field","size:value","starts_with:foo,bar,...","string","timezone","unique:table,column,except,idColumn","url","uuid"];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schemas: [],
            modelName: 'Schema',
            moreDropdown: false
        };
        this.state.schemas.push({...singleRow});
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ moreDropdown: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {

        if (!this.dropdownMenu.contains(event.target)) {

            this.setState({ moreDropdown: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });

        }
    }

    addRow = () => {
        let cState = this.state.schemas;
        cState.push({...singleRow});
        this.setState({schemas: cState});
    }

    removeRow = () => {
        let cState = [...this.state.schemas];
        cState.pop();
        this.setState({schemas: cState});
    }

    removeRowAt = (index)=>{
        let cState = [...this.state.schemas];
        cState.splice(index,1);
        this.setState({schemas: cState});
    }

    shiftRowUp = (index)=>{//todo: row shift up & down
        if(index===0)
            return;
        let cState = [...this.state.schemas];
        let curElem = {...cState[index]};
        let prevElem = {...cState[index-1]};
        this.setState({schemas: cState});
    }

    shiftRowDown = (index)=>{

    }

    updateModelName = (event) => {
        this.setState({modelName: event.target.value});
    }

    updateRow = (input, index) => {
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
            <div>
                <nav id="header" className="bg-white fixed w-full z-10 top-0 shadow">


                    <div className="w-full container mx-auto flex flex-wrap justify-between items-center mt-0 pt-3 pb-3 md:pb-0">

                        <div className="pl-2 md:pl-0 pb-1 inline-flex" style={{alignItems:'center'}}>
                            <img src={process.env.PUBLIC_URL + "/logo192.png"} className="w-10 h-10"/> <span className="text-blue-600 no-underline hover:no-underline font-bold pl-1">Infyom Json Schema Generator</span>
                        </div>
                        <a href="https://github.com/harish81/infyom-schema-generator" target="_blank" className="text-gray-600 hover:bg-gray-300 focus:bg-gray-300 p-2 rounded mr-2" title={"Github"}>
                            <Icons.GitHub size={24}/>
                        </a>
                    </div>
                </nav>
                <div className="container m-auto bg-white shadow rounded px-8 pt-4 pb-8 mb-4 mt-20">
                    <h5 className="font-bold text-gray-600 pb-2">Model/Schema Name </h5>
                    <div className="mt-4 mb-4">
                        <input type="text" name="model" id="model" placeholder="Enter model/schema name.."
                               value={this.state.modelName} onChange={this.updateModelName}
                               title={"Enter schema name here"}
                               className="border rounded py-2 px-3 text-grey-darkest focus:outline-none focus:bg-white focus:border-gray-500"/><span
                        className="text-gray-600">.json</span>
                    </div>
                </div>
                <div className="container m-auto bg-white shadow rounded px-8 pt-4 pb-8 mb-4 mt-2">
                    <h5 className="font-bold text-gray-600 pb-2">Fields </h5>
                    <Table>
                        {
                            this.state.schemas.map((row, index) => {
                                return (
                                    <TableRow key={index}
                                              row={row}
                                              index={index}
                                              onChange={(input) => {
                                                  this.updateRow(input, index)
                                              }}
                                              removeRowAt={()=>{this.removeRowAt(index)}}
                                    />
                                );
                            })
                        }
                    </Table>

                    <div className="flex items-center mt-4 bg-gray-100 rounded border justify-center">
                        <button title="Add Field"
                            className="hover:text-blue-500 focus:text-blue-500 text-gray-600 focus:outline-none py-2 px-3 inline-flex font-bold"
                            type="button" onClick={this.addRow}>
                            <Icons.PlusCircle size={20} className="mr-2"/> <span className="hidden sm:inline">Add Field</span>
                        </button>
                        <button onClick={this.downloadFile} title="Download Schema File"
                                className="hover:text-green-500 focus:text-green-500 text-gray-600 focus:outline-none py-2 px-3 inline-flex font-bold">
                            <Icons.Download size={20} className="mr-2"/>
                            <span className="hidden sm:inline">Download</span>
                        </button>
                        <button onClick={this.removeRow} title="Remove Last Field"
                                className="hover:text-red-500 focus:text-red-500 text-gray-600 focus:outline-none py-2 px-3 inline-flex font-bold">
                            <Icons.Trash2 size={20} className="mr-2"/>
                            <span className="hidden sm:inline">Remove Field</span>
                        </button>
                        <div className="dropdown">
                            <button title="More" onClick={this.showMenu}
                                    className="hover:text-gray-700 focus:text-gray-700 text-gray-600 focus:outline-none py-2 px-3 inline-flex font-bold">
                                <Icons.MoreHorizontal size={20} className="mr-2"/>
                                <span className="hidden sm:inline">More</span>
                            </button>
                            {
                                this.state.moreDropdown ?
                                    (<ul className="dropdown-content" ref={(element) => {
                                        this.dropdownMenu = element;
                                    }}>
                                        <li>Add id Column</li>
                                        <li>Add created_at Column</li>
                                        <li>Add updated_at Column</li>
                                        <li>Add deleted_at Column</li>
                                        <li>Add created_by Column</li>
                                    </ul>) : ''

                            }
                        </div>
                    </div>
                </div>
                <div className="container m-auto bg-white shadow rounded px-8 pt-4 pb-8 mb-4 mt-2">
                    <h5 className="font-bold text-gray-600">{this.state.modelName}.json</h5>
                    <div className="overflow-auto mt-3 text-sm">
                        <SyntaxHighlighter language="json" style={codeStyle}>
                            {jsonFormatter(JSON.stringify(this.state.schemas))}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
