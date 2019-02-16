import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const File = props => (
    <tr>
        <td className={props.file.file_completed ? 'completed' : ''}>{props.file.file_description}</td>
        <td className={props.file.file_completed ? 'completed' : ''}>{props.file.file_extension}</td>
        <td className={props.file.file_completed ? 'completed' : ''}>{props.file.file_size}</td>
        <td className={props.file.file_completed ? 'completed' : ''}>{props.file.file_duration}</td>
        <td className={props.file.file_completed ? 'completed' : ''}>{props.file.file_dimensions}</td>
        <td className={props.file.file_completed ? 'completed' : ''}>{props.file.file_employeeResponsible}</td>
        <td className={props.file.file_completed ? 'completed' : ''}>{props.file.file_editActive}</td>
        <td>
            <Link to={"/edit/" + props.file._id}>Edit</Link>
        </td>
    </tr>
)

export default class FilesList extends Component {

    constructor(props) {
        super(props);
        this.state = { files: [], isloggedin: true };
        // this.getPosts();
        axios
            .get("http://localhost:4000/api/isloggedin")
            .then(res => {
                if (!res.data) {
                    return this.setState({ isloggedin: false });
                }
            });
        // this.changeHandler = this.changeHandler.bind(this);
        // this.submitHandler = this.submitHandler.bind(this);
        // this.getPosts = this.getPosts.bind(this);
    }



    componentDidMount() {
        axios.get('http://localhost:4000/files/')
            .then(response => {
                this.setState({ files: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/files/')
            .then(response => {
                this.setState({ files: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    fileList() {
        return this.state.files.map(function (currentFile, i) {
            return <File file={currentFile} key={i} />;
        });
    }

    render() {
        return this.state.isloggedin ? (
            <div>
                <h3>Files List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>File Name</th>
                            <th>File Extension</th>
                            <th>File Size (In MB/s)</th>
                            <th>File Duration (In Minutes)</th>
                            <th>File Dimensions (In px)</th>
                            <th>Employee Responsible</th>
                            <th>Edit Active?</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.fileList()}
                    </tbody>
                </table>
            </div>
        ) : (
                <h3>Please login</h3>
            );
    }
}