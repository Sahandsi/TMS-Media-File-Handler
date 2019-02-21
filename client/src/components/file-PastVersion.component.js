import React, { Component } from 'react';

import axios from 'axios';

const File = props =>(
    <tr>
        <td>{props.file.file_description}</td>
        <td>{props.file.file_extension}</td>
        <td>{props.file.file_size}</td>
        <td>{props.file.file_duration}</td>
        <td>{props.file.file_dimensions}</td>
        <td>{props.file.file_tag}</td>
        <td>{props.file.file_employeeResponsible}</td>
        <td>{props.file.file_editActive}</td>
    </tr>
)

export default class pastFile extends Component {

        constructor(props) {
            super(props);
            this.state = {
                file: null,
                id: this.props.match.params.id,
                isLogged: true
            };
        axios
            .get("http://localhost:4000/api/isLogged")
            .then(res => {
                if (!res.data) {
                    return this.setState({ isLogged: false });
                }
            });
    }

    componentDidMount() {
        axios.get('http://localhost:4000/files/'+this.state.id)
            .then(response => {
                console.log(response.data);
                this.setState({ file: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
        }

    fileList(){
        return this.state.file.FileVersions.map(function(FileVersion, i){
            return <File file = {FileVersion} key={i}/>
        })
    }


    render() {
        return (
            <div>
                <div className="bg-light" id="sidebar-wrapper">
                    <h4>File List</h4>
                </div>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                    <tr>
                        <th>File Name</th>
                        <th>File Extension</th>
                        <th>File Size (In MB/s)</th>
                        <th>File Duration (In Minutes)</th>
                        <th>File Dimensions (In px)</th>
                        <th>File Tag</th>
                        <th>Employee Responsible</th>
                        <th>Edit Active?</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.state.file != null ? this.fileList() : <></> }
                    </tbody>
                </table>
            </div>
        )
    }
}