import React, {Component} from 'react';
import axios from 'axios';

export default class EditFile extends Component {

    constructor(props) {
        super(props);


        this.onChangeFileDescription = this.onChangeFileDescription.bind(this);
        this.onChangeEmployeeResponsible = this.onChangeEmployeeResponsible.bind(this);
        this.onChangeEditActive = this.onChangeEditActive.bind(this);
        this.onChangeFileCompleted = this.onChangeFileCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            file_description: '',
            file_employeeResponsible: '',
            file_editActive: '',
            file_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/files/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    file_description: response.data.file_description,
                    file_employeeResponsible: response.data.file_employeeResponsible,
                    file_editActive: response.data.file_editActive,
                    file_completed: response.data.file_completed
                })
            })
            .catch(function(error) {
                console.log(error)
            })
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

    onChangeFileCompleted(e) {
        this.setState({
            file_completed: !this.state.file_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            file_description: this.state.file_description,
            file_employeeResponsible: this.state.file_employeeResponsible,
            file_editActive: this.state.file_editActive,
            file_completed: this.state.file_completed
        };
        axios.post('http://localhost:4000/files/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {

            return (
            <div>
                
                <h3>Update File</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.file_description}
                                onChange={this.onChangeFileDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.file_employeeResponsible}
                                onChange={this.onChangeEmployeeResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    checked={this.state.file_editActive==='Low'}
                                    onChange={this.onChangeEditActive}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={this.state.file_editActive==='Medium'}
                                    onChange={this.onChangeEditActive}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    checked={this.state.file_editActive==='High'}
                                    onChange={this.onChangeEditActive}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                        <div className="form-check">
                            <input  type="checkbox"
                                    className="form-check-input"
                                    id="completedCheckbox"
                                    name="completedCheckbox"
                                    onChange={this.onChangeFileCompleted}
                                    checked={this.state.file_completed}
                                    value={this.state.file_completed}
                                    />
                            <label className="form-check-label" htmlFor="completedCheckbox">
                                Completed
                            </label>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Update File" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        ) 
    }
}