import { MdLocalPhone } from 'react-icons/md';
import { IoMdMail, IoMdPin } from 'react-icons/io';

import { EMPLOYEE_TASKS } from '../../../../constants';
import {
  Card,
  Container,
  Icons,
  Info,
  ProfileImage,
  ProfileSection,
  TaskSection,
} from './styles';

function TaskCard() {
  return (
    <Container>
      {EMPLOYEE_TASKS.map((employee) => (
        <Card key={employee.id}>
          <ProfileSection>
            <ProfileImage
              src='https://via.placeholder.com/150'
              alt={employee.name}
            />
            <Info>
              <p>{employee.name}</p>
              <p>{employee.birthDate}</p>
              <p>{employee.department}</p>
              <p>{employee.position}</p>
            </Info>
            <Icons>
              <MdLocalPhone />
              <IoMdMail />
              <IoMdPin />
            </Icons>
          </ProfileSection>
          <TaskSection>
            <table>
              <thead>
                <tr>
                  <th>Estado</th>
                  <th>Tarefas</th>
                </tr>
              </thead>
              <tbody>
                {employee.tasks.map((task) => (
                  <tr key={task.taskId}>
                    <td>
                      <input
                        type='checkbox'
                        checked={task.completed}
                        readOnly
                      />
                    </td>
                    <td>{task.taskName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TaskSection>
        </Card>
      ))}
    </Container>
  );
}

export default TaskCard;
