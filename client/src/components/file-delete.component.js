import React, {Component} from 'react';
import axios from 'axios';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default class EditFile extends Component {

    constructor(props) {
        super(props);


        this.onChangeFileDescription = this.onChangeFileDescription.bind(this);
        this.onChangeEmployeeResponsible = this.onChangeEmployeeResponsible.bind(this);
        this.onChangeEditActive = this.onChangeEditActive.bind(this);
        this.onChangeFileExtension = this.onChangeFileExtension.bind(this);
        this.onChangeFileSize = this.onChangeFileSize.bind(this);
        this.onChangeFileDuration = this.onChangeFileDuration.bind(this);
        this.onChangeFileArtist = this.onChangeFileArtist.bind(this);
        this.onChangeFileBitrate = this.onChangeFileBitrate.bind(this);
        this.onChangeFileCodec = this.onChangeFileCodec.bind(this);
        this.onChangeFileTag = this.onChangeFileTag.bind(this);
        this.onChangeFileChannels = this.onChangeFileChannels.bind(this);
        this.onChangeFileDimensions = this.onChangeFileDimensions.bind(this);
        this.onChangeFileProfile = this.onChangeFileProfile.bind(this);
        this.onChangeFileDimensions = this.onChangeFileDimensions.bind(this);
        this.onChangeFileCompleted = this.onChangeFileCompleted.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            file_description: '',
            file_employeeResponsible: '',
            file_editActive: '',
            file_size: '',
            file_duration: '',
            file_artist: '',
            file_bitrate: '',
            file_codec: '',
            file_audioChannels: '',
            file_dimensions: '',
            file_colorProfile: '',
            file_extension: '',
            file_tag: '',
            key: 'audio',
            file_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/files/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    file_description: response.data.file_description,
                    file_size: response.data.file_size,
                    file_duration: response.data.file_duration,
                    file_artist: response.data.file_artist,
                    file_bitrate: response.data.file_bitrate,
                    file_codec: response.data.file_codec,
                    file_audioChannels: response.data.file_audioChannels,
                    file_dimensions: response.data.file_dimensions,
                    file_colorProfile: response.data.file_colorProfile,
                    file_extension: response.data.file_extension,
                    file_tag: response.data.file_tag,
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

    onChangeFileTag(e) {
        this.setState({
            file_tag: e.target.value
        });
    }


    onChangeFileExtension(e) {
        this.setState({
            file_extension: e.target.value
        });
    }

    onChangeFileSize(e) {
        this.setState({
            file_size: e.target.value
        });
    }

    onChangeFileDuration(e) {
        this.setState({
            file_duration: e.target.value
        });
    }

    onChangeFileArtist(e) {
        this.setState({
            file_artist: e.target.value
        });
    }

    onChangeFileBitrate(e) {
        this.setState({
            file_bitrate: e.target.value
        });
    }

    onChangeFileChannels(e) {
        this.setState({
            file_audioChannels: e.target.value
        });
    }


    onChangeFileDimensions(e) {
        this.setState({
            file_dimensions: e.target.value
        });
    }

    onChangeFileProfile(e) {
        this.setState({
            file_colorProfile: e.target.value
        });
    }

    onChangeFileCodec(e) {
        this.setState({
            file_codec: e.target.value
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
            file_size: this.state.file_size,
            file_duration: this.state.file_duration,
            file_artist: this.state.file_artist,
            file_tag: this.state.file_tag,
            file_bitrate: this.state.file_bitrate,
            file_codec: this.state.file_codec,
            file_audioChannels: this.state.file_audioChannels,
            file_dimensions: this.state.file_dimensions,
            file_colorProfile: this.state.file_colorProfile,
            file_extension: this.state.file_extension,
            file_employeeResponsible: this.state.file_employeeResponsible,
            file_editActive: this.state.file_editActive,
            file_completed: this.state.file_completed
        };

        axios.post('http://localhost:4000/files/delete/'+this.props.match.params.id, obj)

    this.props.history.push('/filelist');
    }

    render() {

        return (
            <div>

                <h3>Update File</h3>

                <Tabs
                    id="controlled-tab-example"
                    activeKey={this.state.key}
                    onSelect={key => this.setState({key})}
                >
                    <Tab eventKey="audio" title="Audio">

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>File Description: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_description}
                                       onChange={this.onChangeFileDescription}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>File Extension: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_extension}
                                       onChange={this.onChangeFileExtension}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>File Size: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_size}
                                       onChange={this.onChangeFileSize}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>File Duration: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_duration}
                                       onChange={this.onChangeFileDuration}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>File Artist: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_artist}
                                       onChange={this.onChangeFileArtist}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>File Bitrate: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_bitrate}
                                       onChange={this.onChangeFileBitrate}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>Employee Responsible: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_employeeResponsible}
                                       onChange={this.onChangeEmployeeResponsible}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>File Tag: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_tag}
                                       onChange={this.onChangeFileTag}
                                       disabled
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
                                           disabled
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
                                           disabled
                                    />
                                    <label className="form-check-label">Yes</label>
                                </div>

                            </div>
                            <font color="red">WARNING!! DELETING THIS FILE WILL BE PERMANENT AND YOUR FILE IT WILL BE STORED IN A TEMP DATABASE WHICH ONLY ADMIN CAN ACCESS</font>
                            <div className="form-group">
                                <input type="submit" value="Delete File" className="btn btn-primary"/>
                            </div>
                        </form>

                    </Tab>
                    <Tab eventKey="video" title="Video">

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>File Description: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_description}
                                       onChange={this.onChangeFileDescription}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>File Extension: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_extension}
                                       onChange={this.onChangeFileExtension}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>File Size: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_size}
                                       onChange={this.onChangeFileSize}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>File Duration: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_duration}
                                       onChange={this.onChangeFileDuration}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>File Codec: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_codec}
                                       onChange={this.onChangeFileCodec}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>File audio channels: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_audioChannels}
                                       onChange={this.onChangeFileChannels}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>Employee Responsible: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_employeeResponsible}
                                       onChange={this.onChangeEmployeeResponsible}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>File Tag: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_tag}
                                       onChange={this.onChangeFileTag}
                                       disabled
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
                                           disabled
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
                                           disabled
                                    />
                                    <label className="form-check-label">Yes</label>
                                </div>

                            </div>
                            <div className="form-group">
                                <input type="submit" value="Create File" className="btn btn-primary"/>
                            </div>
                        </form>

                    </Tab>
                    <Tab eventKey="image" title="Image">

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>File Description: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_description}
                                       onChange={this.onChangeFileDescription}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>File Extension: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_extension}
                                       onChange={this.onChangeFileExtension}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>File Size: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_size}
                                       onChange={this.onChangeFileSize}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>File Dimensions: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_dimensions}
                                       onChange={this.onChangeFileDimensions}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>File colour profile: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_colorProfile}
                                       onChange={this.onChangeFileProfile}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>Employee Responsible: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_employeeResponsible}
                                       onChange={this.onChangeEmployeeResponsible}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>File Tag: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_tag}
                                       onChange={this.onChangeFileTag}
                                       disabled
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
                                           disabled
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
                                           disabled
                                    />
                                    <label className="form-check-label">Yes</label>
                                </div>

                            </div>
                            <div className="form-group">
                                <input type="submit" value="Create File" className="btn btn-primary"/>
                            </div>
                        </form>

                    </Tab>
                    <Tab eventKey="Other" title="Other">

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>File Description: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_description}
                                       onChange={this.onChangeFileDescription}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>File Extension: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_extension}
                                       onChange={this.onChangeFileExtension}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>File Size: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_size}
                                       onChange={this.onChangeFileSize}
                                       disabled
                                />

                            </div>
                            <div className="form-group">
                                <label>Employee Responsible: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_employeeResponsible}
                                       onChange={this.onChangeEmployeeResponsible}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>File Tag: </label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.file_tag}
                                       onChange={this.onChangeFileTag}
                                       disabled
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
                                           disabled
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
                                           disabled
                                    />
                                    <label className="form-check-label">Yes</label>
                                </div>

                            </div>
                            <div className="form-group">
                                <input type="submit" value="Delete File" className="btn btn-primary"/>
                            </div>
                        </form>

                    </Tab>

                </Tabs>

            </div>

        )
    }
}