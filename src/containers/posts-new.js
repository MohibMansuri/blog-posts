import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {createPosts} from '../actions';

class PostsNew extends Component {

  renderField(field) {
    const {meta: {touched, error}} = field;
    const className = `form-group ${touched && error? 'has-danger':''}`;
    return(
        <div className={className}>
          <label>{field.label}</label>
          <input
            className="form-control"
            type="text"
            {...field.input} />
          <div className="text-help">{touched?error:''}</div>
        </div>
    );
  }

  onFormSubmit(values) {
    this.props.createPosts(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
          <Field
            name="title"
            label="Title"
            component={this.renderField} />
          <Field
            name="categories"
            label="Categories"
            component={this.renderField} />
          <Field
            name="content"
            label="Content"
            component={this.renderField} />
          <button className="btn btn-primary" type="submit">Submit</button>
          <Link id="cancel-add-new-post-button" className="btn btn-danger" to="/">Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if(!values.title) {
    errors.title = "Invalid Title"
  }
  if(!values.categories) {
    errors.categories = "Invalid Categories"
  }
  if(!values.content) {
    errors.content = "Invalid Content"
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, {createPosts})(PostsNew)
);
