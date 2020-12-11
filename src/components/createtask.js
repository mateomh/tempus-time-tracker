/* eslint-disable arrow-body-style */
import FormStyles from '../assets/form.module.css';

const CreateTask = () => {
  return (
    <div className={FormStyles.Form}>
      <h1 className={FormStyles.Title}>Task for</h1>
      <label htmlFor="task-desc" className={FormStyles.Label}>
        Task Description
        <input
          type="text"
          className={FormStyles.Input}
          placeholder="Description"
          id="task-desc"
        />
      </label>
      <label htmlFor="task-time" className={FormStyles.Label}>
        Task Time
        <input
          type="number"
          className={FormStyles.Input}
          placeholder="Time"
          id="task-time"
        />
      </label>
      <button type="button">Create Task</button>
    </div>
  );
};

export default CreateTask;
