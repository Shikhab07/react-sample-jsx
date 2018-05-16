import React from 'react';
import createReactClass from "create-react-class";
import './form.component.scss';

var FormComponent = createReactClass({
    getInitialState: function () {
        return {
            name: '',
            address: '',
            isWorking: false,
            isGraduate: false,
            courses: ['MCA', 'MTech', 'MBA', 'Msc'],
            course: '',
            errors: {}
        };
    },

    handleClearForm: function (event) {
        event.preventDefault();
        this.setState({
            name: '',
            address: '',
            isWorking: false,
            isGraduate: false,
            course: ''
        });
    },

    handleInputChange: function (event) {
        const target = event.target;
        var value = '';
        if (target.type === 'checkbox') {
            value = target.checked;
        }
        else if (target.type === 'radio') {
            value = target.value === 'true' ? true : false;
        }
        else {
            value = target.value;
        }
        const name = target.name;
        this.setState({
            [name]: value
        });
    },

    handleSubmit: function (event) {
        if (!this.isFormValid()) {
            event.preventDefault();
            return;
        }
        const data = {
            name: this.state.ownerName,
            address: this.state.address,
            isWorking: this.state.isWorking,
            isGraduate: this.state.isGraduate,
            course: this.state.course
        };
        console.log('submitted data :' + data);
        this.handleClearForm(event);
    },

    validate: function (name, address, course) {
        // if true, means invalid
        return {
            nameError: name.length === 0,
            addressError: address.length === 0
        }
    },

    isFormValid: function () {
        const _errors = this.validate(this.state.name, this.state.address, 'e');
        this.setState({
            errors: _errors
        });
        const validity= Object.keys(_errors).some(x => this.state.errors[x]);
        return validity;
    },

    handleKeyUp: function (event) {
        if (event.keyCode === 13) {
            return this.handleSubmit();
        }
    },

    render: function () {

        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p><b> Form Elements</b></p>
                    </div>
                    <div className="col-md-12">
                        <form name='userform' onSubmit={this.handleSubmit} onKeyUp={this.handleKeyUp}>
                            <label>Name :</label>
                            <input type='text' name='name' value={this.state.name} onChange={this.handleInputChange}
                                className={this.state.errors.nameError ? "error" : ""} />
                            <br />
                            <label>Address :</label>
                            <textarea value={this.state.address} name='address' onChange={this.handleInputChange}
                                className={this.state.errors.addressError ? "error" : ""} />
                            <br />
                            <label>Is Working :</label>
                            <label>
                                <input
                                    name="isWorking"
                                    type="radio"
                                    value="true"
                                    onChange={this.handleInputChange} checked={this.state.isWorking} />YES
                </label>
                            <label>
                                <input
                                    name="isWorking"
                                    type="radio"
                                    value="false"
                                    checked={!this.state.isWorking}
                                    onChange={this.handleInputChange} />NO
                </label>
                            <br />
                            <label>Graduate :</label>
                            <input
                                name="isGraduate"
                                type="checkbox"
                                checked={this.state.isGraduate}
                                onChange={this.handleInputChange} />
                            <br />
                            <label>Courses :</label>
                            {/* other way of binding list in html */}
                            <select name="course" value={this.state.course} onChange={this.handleInputChange}>
                                {
                                    this.state.courses.map(c => {
                                        return (
                                            <option
                                                key={c}
                                                value={c}>{c}</option>
                                        );
                                    })
                                }
                            </select>
                            <br />
                            <input type="submit" className="primary" text="Submit" />
                            <input type="button" className="primary" value="Reset" onClick={this.handleClearForm} />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
})

export default FormComponent;