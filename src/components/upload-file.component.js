import React, { Component } from 'react';
import axios from 'axios';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';






export default class CreateFile extends Component {



    constructor(props) {
        super(props);

        this.onChangeFileDescription = this.onChangeFileDescription.bind(this);
        this.onChangeEmployeeResponsible = this.onChangeEmployeeResponsible.bind(this);
        this.onChangeEditActive = this.onChangeEditActive.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            file_description: '',
            file_employeeResponsible: '',
            file_editActive: '',
            file_completed: false,
            key: 'home',
            isloggedin: true
        };
        this.handleSelect = this.handleSelect.bind(this);
        axios
            .get("http://localhost:4000/api/isloggedin")
            .then(res => {
                if (!res.data) {
                    return this.setState({ isloggedin: false });
                }
            });

    }

    handleSelect(key) {
        console.log('selected' + key);
        this.setState({ key: key });
    }

    onChangeFileDescription(e) {
        this.setState({
            file_description: e.target.value
        });
    }

    onChangeEmployeeResponsible(e) {
        this.setState({
            file_employeeResponsible: e.target.value
        });
    }

    onChangeEditActive(e) {
        this.setState({
            file_editActive: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`File Description: ${this.state.file_description}`);
        console.log(`Employee Responsible: ${this.state.file_employeeResponsible}`);
        console.log(`Edit Active: ${this.state.file_editActive}`);
        console.log(`Completed: ${this.state.file_completed}`);

        const newFile = {
            file_description: this.state.file_description,
            file_employeeResponsible: this.state.file_employeeResponsible,
            file_editActive: this.state.file_editActive,
            file_completed: this.state.file_completed
        }

        axios.post('http://localhost:4000/files/add', newFile)
            .then(res => console.log(res.data));

        this.setState({
            file_description: '',
            file_employeeResponsible: '',
            file_editActive: '',
            file_completed: false
        })
    }

    render() {
        return this.state.isloggedin ? (
            <div style={{ marginTop: 20 }}>

                <h3>Upload a New File</h3>


                <Tabs
                    id="controlled-tab-example"
                    activeKey={this.state.key}
                    onSelect={key => this.setState({ key })}
                >
                    <Tab eventKey="home" title="Home">

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>File Description: </label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.file_description}
                                    onChange={this.onChangeFileDescription}
                                />
                            </div>
                            <div className="form-group">
                                <label>Employee Responsible: </label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.file_employeeResponsible}
                                    onChange={this.onChangeEmployeeResponsible}
                                />
                            </div>
                            <div className="form-group">
                                <label>In Edit:</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="radio"
                                        name="editActiveOpt"
                                        id="activeNo"
                                        value="No"
                                        checked={this.state.file_editActive === 'No'}
                                        onChange={this.onChangeEditActive}
                                    />
                                    <label className="form-check-label">No</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="radio"
                                        name="editActiveOpt"
                                        id="activeYes"
                                        value="Yes"
                                        checked={this.state.file_editActive === 'Yes'}
                                        onChange={this.onChangeEditActive}
                                    />
                                    <label className="form-check-label">Yes</label>
                                </div>

                            </div>
                            <div className="form-group">
                                <input type="submit" value="Create File" className="btn btn-primary" />
                            </div>
                        </form>

                    </Tab>
                    <Tab eventKey="profile" title="Profile">

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>File Description: </label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.file_description}
                                    onChange={this.onChangeFileDescription}
                                />
                            </div>
                            <div className="form-group">
                                <label>Employee Responsible: </label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.file_employeeResponsible}
                                    onChange={this.onChangeEmployeeResponsible}
                                />
                            </div>
                            <div className="form-group">
                                <label>In Edit:</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="radio"
                                        name="editActiveOpt"
                                        id="activeNo"
                                        value="No"
                                        checked={this.state.file_editActive === 'No'}
                                        onChange={this.onChangeEditActive}
                                    />
                                    <label className="form-check-label">No</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="radio"
                                        name="editActiveOpt"
                                        id="activeYes"
                                        value="Yes"
                                        checked={this.state.file_editActive === 'Yes'}
                                        onChange={this.onChangeEditActive}
                                    />
                                    <label className="form-check-label">Yes</label>
                                </div>

                            </div>
                            <div className="form-group">
                                <input type="submit" value="Create File" className="btn btn-primary" />
                            </div>
                        </form>

                    </Tab>
                    <Tab eventKey="contact" title="Contact">

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>File Description: </label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.file_description}
                                    onChange={this.onChangeFileDescription}
                                />
                            </div>
                            <div className="form-group">
                                <label>Employee Responsible: </label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.file_employeeResponsible}
                                    onChange={this.onChangeEmployeeResponsible}
                                />
                            </div>
                            <div className="form-group">
                                <label>In Edit:</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="radio"
                                        name="editActiveOpt"
                                        id="activeNo"
                                        value="No"
                                        checked={this.state.file_editActive === 'No'}
                                        onChange={this.onChangeEditActive}
                                    />
                                    <label className="form-check-label">No</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="radio"
                                        name="editActiveOpt"
                                        id="activeYes"
                                        value="Yes"
                                        checked={this.state.file_editActive === 'Yes'}
                                        onChange={this.onChangeEditActive}
                                    />
                                    <label className="form-check-label">Yes</label>
                                </div>

                            </div>
                            <div className="form-group">
                                <input type="submit" value="Create File" className="btn btn-primary" />
                            </div>
                        </form>

                    </Tab>
                </Tabs>





                {/* 

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>File Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.file_description}
                                onChange={this.onChangeFileDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Employee Responsible: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.file_employeeResponsible}
                                onChange={this.onChangeEmployeeResponsible}
                                />
                    </div>
                    <div className="form-group">
                    <label>In Edit:</label>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="editActiveOpt"
                                    id="activeNo"
                                    value="No"
                                    checked={this.state.file_editActive==='No'}
                                    onChange={this.onChangeEditActive}
                                    />
                            <label className="form-check-label">No</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="editActiveOpt"
                                    id="activeYes"
                                    value="Yes"
                                    checked={this.state.file_editActive==='Yes'}
                                    onChange={this.onChangeEditActive}
                                    />
                            <label className="form-check-label">Yes</label>
                        </div>

                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
                 */}



            </div>
        ) : (
                <h3>Please login</h3>
            );
    }
}

