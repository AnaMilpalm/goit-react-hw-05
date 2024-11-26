import { Field, Formik, Form } from "formik";

const SearchBar = ({ handleSetQuery }) => {
  const handleSubmit = (values) => {
    handleSetQuery(values.query);
  };

  const initialValues = {
    query: "",
  };
  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {() => (
          <Form>
            <Field name="query" placeholder="Enter username" />
            <button type="submit">Search users</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchBar;
