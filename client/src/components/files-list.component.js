import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt,faPencilAlt,faCodeBranch } from '@fortawesome/free-solid-svg-icons'


const File = props => (
    <tr>
        <td>{props.file.file_description}</td>
        <td>{props.file.file_extension}</td>
        <td>{props.file.file_size}</td>
        <td>{props.file.file_duration}</td>
        <td>{props.file.file_dimensions}</td>
        <td>{props.file.file_tag}</td>
        <td>{props.file.file_employeeResponsible}</td>
        <td>{props.file.file_editActive}</td>


            <td>
                <Link to={"/pastVersions/"+props.file._id}> <FontAwesomeIcon icon={faCodeBranch}/> </Link>

                <Link to={"/edit/"+props.file._id}> <FontAwesomeIcon icon={faPencilAlt}/> </Link>

                <Link to={"/delete/"+props.file._id}> <FontAwesomeIcon icon={faTrashAlt}/> </Link>
            </td>


    </tr>
)

const FileSearch = props => (
    <tr>
        <td>{props.file.file_description}</td>
        <td>{props.file.file_extension}</td>
        <td>{props.file.file_size}</td>
        <td>{props.file.file_duration}</td>
        <td>{props.file.file_dimensions}</td>
        <td>{props.file.file_tag}</td>
        <td>{props.file.file_employeeResponsible}</td>
        <td>{props.file.file_editActive}</td>

        <td>
            <Link to={"/edit/" + props.file._id}>Edit</Link>
            <Link to={"/pastVersions/"+props.file._id}>Past Versions</Link>
        </td>
    </tr>
)


export default class FilesList extends Component {

    constructor(props) {
        super(props);
        this.state = { files: [],fileOBJ:null,filterString:'', isLogged: true, searchString: "", searchCategory: "", searchResult: null };
        // this.getPosts();

        axios
            .get("http://localhost:4000/api/isLogged")
            .then(res => {
                if (!res.data) {
                    return this.setState({ isLogged: false });
                }
            });
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

  

    onChangeSearchString = e => {
        this.setState({
            searchString: e.target.value
        })
    }


    onChangeSearchCategory = e => {
        this.setState({
            searchCategory: e.target.value
        })
    }

    onSearch = e => {
        e.preventDefault();
        const searchFile = {
            searchString: this.state.searchString,
            searchCategory:this.state.searchCategory
        }

        axios.post('http://localhost:4000/files/search', searchFile)
        .then( res =>{
            if(res.data){
                console.log(res.data);
                this.setState({searchResult: res.data})

            }else{
                console.log("Not Found");
            }
        })

        this.setState({
            searchString: ""
        })
    }

    fileListSearch() {
        console.log(this.state.searchResult);
        return this.state.searchResult.map(function (currentFile, i) {
            return <FileSearch file={currentFile} key={i} />;
        });
    }

    render() {


        return this.state.isLogged ? (

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
                            <th>File Tag</th>
                            <th>Employee Responsible</th>
                            <th>Edit Active?</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.fileList()}
                    </tbody>
                </table>

                <form>

                    <div className="form-group" >
                        <label>Search String</label>
                        <input type = "text" value = {this.state.searchString} onChange = {this.onChangeSearchString} className = "form-control" />
                    </div>

                    <div className="form-group">
                        <label>Search Category</label>
                        <select className="form-control" onChange = {this.onChangeSearchCategory} >
                            <option defaultValue = {true}>Please select option</option>
                            <option value="file_description">File Name</option>
                            <option value="file_tag">File Tag</option>
                            <option value="file_extension">File Extension</option>
                        </select>
                     </div>

                    <div className = "form-group">
                    < input className="btn btn-primary" onClick = {this.onSearch} type="submit" value = "Search File" />
                    </div>
                </form>

                <table className="table table-striped" style={{ marginTop: 20 }}>
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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.state.searchResult != null ? this.fileListSearch() : <></> }
                    </tbody>
                </table>

            </div>

        ) : (
                <h3>Please login</h3>
            );
    } 
}