import { Field, Formik, Form } from "formik";
import PropTypes from "prop-types";

const SearchBar = ({ handleSetQuery, initialQuery }) => {
  return (
    <div>
      <Formik
        initialValues={{ query: initialQuery || "" }}
        onSubmit={(values) => {
          handleSetQuery(values.query);
        }}
      >
        {() => (
          <Form>
            <Field name="query" placeholder="Enter movie name..." />
            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

SearchBar.propTypes = {
  handleSetQuery: PropTypes.func.isRequired,
  initialQuery: PropTypes.string, // Передаємо початковий стан форми (зберігаємо значення)
};

export default SearchBar;
