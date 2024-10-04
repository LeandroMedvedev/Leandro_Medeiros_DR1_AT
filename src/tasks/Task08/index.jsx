import styles from './style.module.css';
import TaskCard from './components/TaskCard';
import { EMPLOYEE_TASKS } from '../../constants';

function Task08() {
  return (
    <div className={styles.container}>
      {EMPLOYEE_TASKS.map((employee, index) => (
        <TaskCard key={index} employee={employee} />
      ))}
    </div>
  );
}

export default Task08;
