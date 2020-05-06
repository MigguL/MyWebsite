import React from 'react';
import { Formik, Form, Field} from 'formik';
import {Button} from 'reactstrap';
import PortInput from '../form/PortInput';
import PortDate from '../form/PortDate';

const validateInputs = (values) => {
    const errors = {};

    Object.entries(values).forEach(([key, value]) => {
        if(!values[key] && (values[key] === 'startDate' || values[key] === 'keyDate')) {
            errors[key] = `Field ${key} is required!`
        }
    });

    const startDate = values.startDate;
    const endDate = values.endDate;

    if(startDate && endDate && endDate.isBefore(startDate)){
        errors.endDate = 'End Date cannot be before start date!';
    }

    return errors;
}
const INITIAL_VALUES = 
    {
        title: '',
        company: '',
        location: '',
        position: '',
        description: '', //Text Area
        startDate: '', // Date
        endDate: '' //Date
    };

const PortfolioCreateForm = (props) => (
    <div>
        <Formik
            initialValues={INITIAL_VALUES}
            validate={validateInputs}
            onSubmit={props.onSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="text" name="title" component={PortInput} label="Title"/>
 
                    <Field type="text" name="company" component={PortInput} label="Company"/>

                     <Field type="text" name="location" component={PortInput} label="Location"/>

                     <Field type="text" name="position" component={PortInput} label="Position"/>

                    <Field type="textarea" name="description" component="textarea" component={PortInput} label="Description"/>

                    <Field name="startDate" component={PortDate} label="Start Date"/>

                    <Field name="endDate" component={PortDate} label="End Date" canBeDisabled={true}/>

                    <Button color="success" size="lg" type="submit" disabled={isSubmitting}>
                        Create
                    </Button>
                </Form>
            )}
        </Formik>
    </div>
);

export default PortfolioCreateForm;













// import React from 'react';

// export default class PortfolioCreateForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {title: '', description: '', language: ''};
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         const field = event.target.name;
//         this.setState({[field]: event.target.value});
//     }

//     handleSubmit(event) {alert('A name was submitted: ' + this.state.title + ' ' + this.state.description + ' ' + this.state.language);
//       event.preventDefault();
//     }

//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input name="title" type="text" value={this.state.value} onChange={this.handleChange} /></label>
//             <label>
//             Description:
//           <textarea name="description" type="text" value={this.state.description} onChange={this.handleChange} /></label>
//           <label>
//           Pick your favorite Programming Language:
//           <select name="language" value={this.state.language} onChange={this.handleChange}><option value="javascript">JavaScript</option>
//             <option value="python">Python</option>
//             <option value="c++">C++</option>
//             <option value="c#">C#</option>
//           </select>
//         </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }